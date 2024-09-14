import mongoose from "mongoose";

const isValidObjectId = (id,res) =>{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({message: "Object Id is not valid"})
    }
}

export{
    isValidObjectId,
}