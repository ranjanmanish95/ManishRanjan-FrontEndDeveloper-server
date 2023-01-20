import express from "express";
import { History } from "../models/history.js";

const historyRouter = new express.Router();

//history routes
historyRouter.get("/history", async (req, res) => {
  try {
    const history = await History.find({});
    res.status(201).send(history);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default historyRouter;
