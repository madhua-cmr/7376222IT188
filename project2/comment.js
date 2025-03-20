import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
postid:{
  type:mongoose.SchemaTypes.ObjectId,
   ref:"post"
},
content:{
type:String,

},
comments:[
      {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"post"
      }]
    })


const comment=mongoose.model('comment',commentSchema);
export default comment;