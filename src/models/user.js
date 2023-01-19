import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email :{
        type: String,
        trim: true,
        unique: true,
        lowerCase: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.includes('password')){
                return new Error('Password cannot contain password');
            }
        }
    },
    company: {
      type: String,
      required: true
    },
    tokens: [{
            token: {
              type: String,
              required: true
              }
           }]
})

userSchema.methods.generateAuthToken = async function(){
  const user = this;
  const token = jwt.sign({_id: user._id.toString()},'manishranjan',{expiresIn: '7 days'});
  user.tokens = user.tokens.concat({token: token});
  await user.save();
  return token;
}

userSchema.statics.findByCredentials = async (email,password)=>{
  const user = await User.findOne({email});
  if(!user){
    throw new Error('Unable to Login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    throw new Error('Unable to Login');
  }

  return user;
}

//hash the plain text password before saving
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    next();
})

export const User = mongoose.model('User', userSchema);