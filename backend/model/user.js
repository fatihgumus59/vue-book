import mongoose from "mongoose";
const Schema = mongoose.Schema;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({

    name:{
        type: String,
        required: true,
        default: '',
    },
    username:{
        type: String,
        required: true,
        unique : true,
        trim: true,
        maxLength:20,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique : true,
        match : [emailRegex,"Invalid Email Address"],
    },
    password:{
        type: String,
        default: '',
        trim: true,
    },
    admin:{
        type: Boolean,
        default: false,
    },
},{timestamps: true,versionKey:false});

export default mongoose.model('User',userSchema);