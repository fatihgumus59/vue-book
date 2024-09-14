import mongoose from "mongoose";
import {insert,modify,remove,getById,listAll} from "../services/book.js"
import { isValidObjectId } from "../utils/index.js";

const getAllBooks = async (req,res)=>{

    try{

        listAll()
        .then((response)=>{

            return res.status(200).json({
                status : 200,
                message:"Listed Books",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Listed Books",
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

const getABook = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{

        getById(id)
        .then((response)=>{

            if(!response) return res.status(500).json({message : "Not Listed Book"});

            return res.status(200).json({
                status : 200,
                message:"Listed Book",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Listed Book",
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

const createABook = async (req,res)=>{

    try{

        const data ={
            title : req.body?.title,
            author : req.body?.author,
            description : req.body?.description,
            pageNumber : req.body?.pageNumber,
            rating : req.body?.rating,
        }

        insert(data)
        .then((response)=>{

            return res.status(201).json({
                status : 201,
                message:"Created Books",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Created Books",
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

const updateBook = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{

        const data ={
            title : req.body?.title,
            author : req.body?.author,
            description : req.body?.description,
            pageNumber : req.body?.pageNumber,
            rating : req.body?.rating,
        }

        modify(id,data)
        .then((response)=>{

            return res.status(201).json({
                status : 201,
                message:"Updates Books",
                data: response
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Updates Books",
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

const removeBook = async (req,res)=>{

    const {id} = req.params;
    if(isValidObjectId(id,res)) return;

    try{

        const data ={
            title : req.body?.title,
            author : req.body?.author,
            description : req.body?.description,
            pageNumber : req.body?.pageNumber,
            rating : req.body?.rating,
        }

        remove(id,data)
        .then((response)=>{

            if(!response) return res.status(500).json({message: "Not Removed Book"})

            return res.status(201).json({
                status : 201,
                message:"Removed Books",
            })
        })
        .catch((err)=>{

            return res.status(500).json({
                status : 500,
                message:"Not Removed Books",
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
    getAllBooks,
    getABook,
    createABook,
    updateBook,
    removeBook
}