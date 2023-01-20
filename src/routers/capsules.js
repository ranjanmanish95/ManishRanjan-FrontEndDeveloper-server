import express from "express";
import { Capsules } from "../models/capsules.js";
import { CapsulesData } from "../capsulesData.js";
const capsuleRouter = new express.Router();

//capsule routes
capsuleRouter.get("/capsules", (req, res) => {
  const { q } = req.query;
  const keys = ["status", "type"];
  const search = (data) => {
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(q))
    );
  };

  q ? res.send(search(CapsulesData)) : res.send(CapsulesData);
});

export default capsuleRouter;
