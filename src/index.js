import express from 'express';
import  mongoose from 'mongoose';
import userRouter  from './routers/user.js';
import capsuleRouter from './routers/capsules.js';
import historyRouter from './routers/history.js';
import launchRouter from './routers/launch.js';
import payloadRouter from './routers/payload.js';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
const port = process.env.PORT || 8001;
mongoose.set('strictQuery', true);
const connectionURL = 'mongodb+srv://ranjanmanish:91101265020m@cluster0.xlizp.mongodb.net/?retryWrites=true&w=majority'

 mongoose.connect(connectionURL,
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(userRouter);
app.use(capsuleRouter);
app.use(launchRouter);
app.use(payloadRouter);
app.use(historyRouter);

app.listen(port,(err)=>{
  if(err){
    return console.log('Error in connnecting to express server')
  }
  console.log('Server is running on port 8001');
})

// const myFunction = async() =>{
//   const token =  jwt.sign({_id: 'abc123'}, 'thisismynewassessment', {expiresIn: '30 seconds'});
//   console.log(token); 

//   const data = jwt.verify(token, 'thisismynewassessment');
//   console.log(data);
// }

// myFunction();



