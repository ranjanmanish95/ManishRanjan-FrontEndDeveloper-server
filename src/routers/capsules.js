import express from 'express';
import { Capsules } from '../models/capsules.js';
const capsuleRouter = new express.Router();

capsuleRouter.get('/capsules', async (req,res)=>{
    try{
     const capsules = await Capsules.find({});
     res.status(201).send(capsules);
    } catch(e){
     res.status(500).send(e);
    }
  })

export default capsuleRouter;