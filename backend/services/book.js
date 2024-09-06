import Book from "../model/Book.js";

const insert =(data)=>{
    const book = new Book(data);
    return book.save();
}

const listAll = (where) =>{
    return Book.find(where || {}).sort("-createdAt")
}

const getById =(Id)=>{
    return Book.findById({_id : Id})
}

const modify =(Id,data)=>{
    return Book.findByIdAndUpdate(Id,data,{new:true})
}

const remove =(Id)=>{
    return Book.findByIdAndDelete(Id,{new:true})

}

export{
    insert,
    listAll,
    getById,
    modify,
    remove
}