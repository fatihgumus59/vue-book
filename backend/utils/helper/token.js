import CryptoJS from 'crypto-js';
import Jwt from 'jsonwebtoken';


const passwordToHash = (password) => {
    return CryptoJS.HmacSHA256(password,CryptoJS.HmacSHA1(password,process.env.PASSWORD_HASH).toString()).toString();
};

const accessToken = (userId) =>{
    return Jwt.sign({user_id : userId},process.env.JWT_ACCESS_TOKEN,{expiresIn:'8h'});
}

const verifyToken = (token)=>{
    return Jwt.verify(token,process.env.JWT_ACCESS_TOKEN);
}

export  {
    passwordToHash,
    accessToken,
    verifyToken
}