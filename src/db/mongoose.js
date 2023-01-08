import  mongoose from 'mongoose';

mongoose.set('strictQuery', true);
const connectionURL = 'mongodb+srv://ranjanmanish:91101265020m@cluster0.xlizp.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'bsf-assessment' 
 const mongooseConnection = mongoose.connect(connectionURL,
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  export default mongooseConnection;