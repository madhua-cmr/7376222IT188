import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import user from "./models/user.js";
import post from "./models/post.js";
const app = express();
const PORT = process.env.PORT;

app.get("/topusers", (req, res) => {
  const user = user.aggregate([
    {
      $project: {
        username: 1, 
        postCount: { $size: "$posts" } // Size of the posts array
      }
    },
    {
      $sort: { postCount: -1 } // Sort by post count in descending order
    },
    {
      $limit: 5 // Limit to top 5 users
    }
  ])
  
});

app.get("/trendposts", (req, res) => {
  const posts = post.aggregate([
    {
      $project: {
       content:1,
       commentCount: { $size: "$comments" } // Size of the comment array
      }
    },
    {
      $sort: { commentCount: -1 } // Sort by comment count in descending order
    }
  ])
});

app.get("/feed", (req, res) => {
  const posts = post.find().sort({ createdAt: -1 });
  res.status(200).json(posts);
});

app.listen(PORT, async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => console.log("MongodbConnected", conn.connection.host))
    .catch((err) => {
      console.log(err.message);
    });
  console.log("Server listening to the port", PORT);
});
