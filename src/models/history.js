import  mongoose from 'mongoose';
const historySchema = new mongoose.Schema({
    id:{
      type: Number,
      required: true
    },
    title: {
        type: String,
        required: true
    }, 
    event_date_utc: {
        type: String,
        required: true
    },
    details:{
       type: String,
       required: true
    }

})

export const History = mongoose.model('History',historySchema); 

