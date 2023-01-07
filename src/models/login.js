import mongoose from 'mongoose';
import validator from 'validator';

const loginSchema = new mongoose.Schema({
    email :{
        type: String,
        trim: true,
        lowerCase: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    }
})

export const Login = mongoose.model('Login', loginSchema);