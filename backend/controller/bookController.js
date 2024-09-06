import {insert,modify,remove,getById,listAll} from "../services/book.js"

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

const create = async (req,res)=>{

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

export{
    getAllBooks,
    create
}