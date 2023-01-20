import mongoose from "mongoose";
//capsule model
const capsulesSchema = new mongoose.Schema({
  capsule_serial: {
    type: String,
    required: true
  },
  capsule_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  original_launch: {
    type: String,
    required: true
  }
});

export const Capsules = mongoose.model("Capsules", capsulesSchema);
