import auth from "../middleware/auth.js";
import express from "express";
import { Contact } from "../models/contact.js";

const contactRouter = new express.Router();

contactRouter.post("/contact", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).send({ message: "Your data is saved. Thanks." });
  } catch (e) {
    res.status(400).send(e);
  }
});

export default contactRouter;
