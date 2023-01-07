import  mongoose from 'mongoose';
const launchSchema = new mongoose.Schema({
    flight_number:{
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
    }
})

export const Launch = mongoose.model('Launch',launchSchema); 
  
