import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
userid:{
  type:mongoose.SchemaTypes.ObjectId,
   ref:"user"
},
content:{
type:String

}

},{timestamps:true})

const post=mongoose.model('post',postSchema);
export default post;