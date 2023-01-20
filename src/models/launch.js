import mongoose from "mongoose";
const launchSchema = new mongoose.Schema({
  flight_number: {
    type: Number,
    required: true
  },
  mission_name: {
    type: String,
    required: true
  },
  rocket_name: {
    type: String,
    required: true
  },
  launch_success: {
    type: Boolean
  },
  upcoming: {
    type: Boolean
  },
  launch_year: {
    type: String
  }
});

export const Launch = mongoose.model("Launch", launchSchema);
