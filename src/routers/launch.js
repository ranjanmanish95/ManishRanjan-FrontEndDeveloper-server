import express from 'express';
import { Launch } from '../models/launch.js';
const launchRouter = new express.Router();

launchRouter.get('/launch/all', async (req,res)=>{
    try{
     const launch = await Launch.find({});
     res.status(201).send(launch);
    } catch(e){
     res.status(500).send(e);
    }
   })

launchRouter.get('/launch/upcoming', async (req,res)=>{
    try{
     const launch = await Launch.find({upcoming: true});
     res.status(201).send(launch);
    } catch(e){
     res.status(500).send(e);
    }
   })  

   launchRouter.get('/launch/failed', async (req,res)=>{
    try{
     const failedLaunch = await Launch.find({launch_success : false});
     res.status(201).send(failedLaunch);
    } catch(e){
     res.status(500).send(e);
    }
   }) 

   launchRouter.get('/launch/successfull', async (req,res)=>{
    try{
     const failedLaunch = await Launch.find({launch_success: true});
     res.status(201).send(failedLaunch);
    } catch(e){
     res.status(500).send(e);
    }
   }) 

export default launchRouter;