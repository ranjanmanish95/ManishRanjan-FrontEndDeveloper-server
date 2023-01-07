import mongoose from 'mongoose';
const payloadSchema = new mongoose.Schema({
    payload_id:{
      type: Number,
      required: true
    },
    payload_mass_kg: {
        type: String
    }, 
    manufacturer: {
        type: String
    }
})

export const Payload = mongoose.model('Payload',payloadSchema); 