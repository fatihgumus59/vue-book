import User from "../model/user.js";

const insert =(data)=>{
    const user = new User(data);
    return user.save();
}

const listAll = (where) =>{
    return User.find(where || {}).select('-password').sort("-createdAt")
}

const getById =(Id)=>{
    return User.findById({_id : Id})
}

const modify = (Id,data)=>{
    return User.findByIdAndUpdate(Id,data,{new:true})
}

const remove =(Id)=>{
    return User.findByIdAndDelete(Id,{new:true})

}

export{
    insert,
    listAll,
    getById,
    modify,
    remove
}