import express from 'express';
import mongoose from 'mongoose';
import userRouter  from './routers/user.js';
import capsuleRouter from './routers/capsules.js';
import historyRouter from './routers/history.js';
import launchRouter from './routers/launch.js';
import payloadRouter from './routers/payload.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const port = process.env.PORT || 8001;
mongoose.set('strictQuery', true);
const connectionURL = 'mongodb+srv://ranjanmanish:98352614920m@cluster0.xlizp.mongodb.net/?retryWrites=true&w=majority'

 mongoose.connect(connectionURL,
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log('Database connected');
  })
  .catch((e)=>{
    console.log('Error occured');
  })


app.use(userRouter);
app.use(capsuleRouter);
app.use(payloadRouter);
app.use(historyRouter);
app.use(launchRouter);

app.listen(8001,(err)=>{
  if(err){
    return console.log('Error in connnecting to express server')
  }
  console.log('Server is running on port 8001');
})

