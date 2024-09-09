const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'please provide a password'],
        minlength: 8,
        select: false
    },
    passwordConfirm:{
        type: String,
        required: [true, 'Please confirm your password']
    },
    balance: {
        type: Number,
        default: 20000
    }
});

userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;