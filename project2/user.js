import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "post",
    },
  ],
});

const user = mongoose.model("user", userSchema);
export default user;
