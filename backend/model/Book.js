import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        requried:true,
        default : "",
    },
    author:{
        type: String,
        requried:true,
        default : "",
    },
    description:{
        type: String,
        requried:true,
        default : "",

    },
    pageNumber:{
        type: Number,
        requried:true,
        min:0,
        default : 0
    },
    rating:{
        type: Number,
        requried : true,
        min: 0,
        max:10,
        default : 0,
    },
},{timestamps: true,versionKey:false});

export default mongoose.model("Book",BookSchema);