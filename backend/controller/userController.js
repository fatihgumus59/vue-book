import {insert,modify,remove,getById,listAll} from "../services/user.js"
import { isValidObjectId } from "../utils/index.js";
import {passwordToHash} from "../utils/helper/token.js"
import User from "../model/user.js"

const getAllUsers = async (req,res)=>{

    try{

        listAll()
        .then((response)=>{

            return res.status(200).json({
                status : 200,
                message:"Listed Users",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Listed Users",
                error: err
            })
        })

    }catch(error){
        return res.status(500).json({
            status : 500,
            message: "Error"
        })
    }
}

const getAUser = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{

        getById(id)
        .then((response)=>{

            if(!response) return res.status(500).json({message : "Not Listed User"});

            return res.status(200).json({
                status : 200,
                message:"Listed User",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Listed User",
                error: err
            })
        })

    }catch(error){
        return res.status(500).json({
            status : 500,
            message: "Error"
        })
    }
}

const register = async (req,res)=>{

    try{

        req.body.password = passwordToHash(req.body.password);

        const data ={
            username : req.body?.username,
            email : req.body?.email,
            password : req.body?.password,
            admin : false,
        }

        insert(data)
        .then((response)=>{

            response.password = undefined;

            return res.status(201).json({
                status : 201,
                message:"Created User",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Created Users",
                error: err
            })
        })

    }catch(error){
        return res.status(500).json({
            status : 500,
            message: "Error"
        })
    }
}

const updateUser = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{

        const user = await User.findOne({email : req.body?.email})
        if(user) return res.status(400).json({message : "The Email is already exist"})

        req.body.password = passwordToHash(req.body.password);

        const data ={
            username : req.body?.username,
            email : req.body?.email,
            password : req.body?.password,
        }

        modify(id,data)
        .then((response)=>{

            return res.status(200).json({
                status : 200,
                message:"Updates Users",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Updates Users",
                error: err
            })
        })

    }catch(error){
        return res.status(500).json({
            status : 500,
            message: "Error"
        })
    }
}

const removeUser = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{


        remove(id)
        .then((response)=>{

            if(!response) return res.status(500).json({message: "Not Removed User"})

            return res.status(201).json({
                status : 201,
                message:"Removed Users",
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Removed Users",
                error: err
            })
        })

    }catch(error){
        return res.status(500).json({
            status : 500,
            message: "Error"
        })
    }
}

export{
    getAllUsers,
    getAUser,
    register,
    updateUser,
    removeUser
}