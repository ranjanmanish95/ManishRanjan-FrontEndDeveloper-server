import express from 'express';
import { Launch } from '../models/launch.js';
const launchRouter = new express.Router();

launchRouter.get('/launches', async (req,res)=>{
    try{
     const launch = await Launch.find({});
     res.status(201).send(launch);
    } catch(e){
     res.status(500).send(e);
    }
  })

export default launchRouter;