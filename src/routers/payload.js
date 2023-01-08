import express from 'express';
import { Payload } from '../models/payload.js';
const payloadRouter = new express.Router();


payloadRouter.get('/payload', async (req,res)=>{ 
    try{
     const payload = Payload.find({});
     res.status(201).send(payload);
    } catch(e){
      res.status(500).send();
    }
  })

  export default payloadRouter;