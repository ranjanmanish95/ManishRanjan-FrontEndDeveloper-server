import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name : {
      type: String,
      required: true
    },
    email :{
        type: String,
        required: true,
    },
    company: {
      type: String,
      required: true
    },
    details: {
       type: String,
       required: true
    }
})

export const Contact = mongoose.model('Contact', contactSchema);