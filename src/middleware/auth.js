import jwt from 'jsonwebtoken';
import {User} from '../models/user.js';

const auth = async (req, res, next)=>{
   try{
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token);
    const decoded = jwt.verify(token, 'thisismynewassessment');
    console.log(decoded);
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
    if(!user){
        throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
   } catch(e){
    res.status(401).send({error: 'Please authenticate'})
   }
}

export default auth;