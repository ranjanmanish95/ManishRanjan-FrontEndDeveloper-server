import express from "express";
import { Payload } from "../models/payload.js";

const payloadRouter = new express.Router();
//payload routes
payloadRouter.get("/payload", async (req, res) => {
  try {
    const payload = await Payload.find({});
    res.status(201).send(payload);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default payloadRouter;
