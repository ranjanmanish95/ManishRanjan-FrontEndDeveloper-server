import express from 'express';
import { User } from '../models/user.js';
import auth from '../middleware/auth.js'
const userRouter = new express.Router();


userRouter.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({user, token})
  } catch (e) {
      res.status(400).send(e)
  }
})

userRouter.post('/users/login', async (req, res)=>{
  try{
   const user = await User.findByCredentials(req.body.email, req.body.password);
   const token = await user.generateAuthToken();
    res.send({user, token});
  } catch(e){
    res.status(400).send();
  }
})

userRouter.post('/users/logout',auth, async (req,res)=>{
  try{
   req.user.tokens = req.user.tokens.filter((token)=>{
    return token.token !== req.token
   })
   await req.user.save();
   res.send();
  } catch(e){
   res.status(500).send();
  }
})

userRouter.get('/users/me',auth, async (req, res) => {
  res.send(req.user);
})

export default userRouter;