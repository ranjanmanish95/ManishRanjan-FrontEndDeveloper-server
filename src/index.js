import express from 'express';
import  mongoose from 'mongoose';
import { Launch } from './models/launch.js';
import { History } from './models/history.js';
import { Capsules } from './models/capsules.js';
import { Payload } from './models/payload.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
mongoose.set('strictQuery', true);
const connectionURL = 'mongodb+srv://ranjanmanish:91101265020m@cluster0.xlizp.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'bsf-assessment' 
mongoose.connect(connectionURL,
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


app.get('/launches',(req,res)=>{
  Launch.find({}).then((launch)=>{
    res.send(launch);
  }).catch((err)=>{
    res.status(500).send();
  })
})

app.get('/history',(req,res)=>{
  History.find({}).then((history)=>{
   res.send(history);
  }).catch((err)=>{
    res.status(500).send();
  })
})

app.get('/payload', (req,res)=>{
  Payload.find({}).then((payload)=>{
    res.send(payload);
  }).catch((err)=>{
    res.status(500).send();
  })
})

app.get('/capsules', (req,res)=>{
  Capsules.find({}).then((capsule)=>{
    res.send(capsule);
  }).catch((err)=>{
    res.status(500).send();
  })
})

app.post('/login', (req,res)=>{
  console.log(req.body);
  res.send('testing');
})



app.listen(8001,(err)=>{
  if(err){
    return console.log('Error in connnecting to express server')
  }
  console.log('Server is running on port 8001');
})











