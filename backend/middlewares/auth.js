import User from "../model/user.js";
import { verifyToken } from '../utils/helper/token.js';

const authenticateUser = async (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({message : 'Authorazation header is missing!'})

    const tokenParts = authHeader.split(' ')

    if(tokenParts.length !== 2 && tokenParts[0] !== 'Bearer') return res.status(401).json({message: 'Invalid Auth header format!'})

    const token = tokenParts[1];

    try {
        const decodedToken = verifyToken(token);
        req.user = await User.findById(decodedToken.user_id).select('-password')
        next();
    } catch (error) {
        
    }


}

export{
    authenticateUser,
}