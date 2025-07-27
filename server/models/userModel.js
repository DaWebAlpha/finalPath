import mongoose from '../config/db.js';
//import uniqueValidator from 'mongoose-unique-validator'; for unique: true
import { createId } from '@paralleldrive/cuid2';
import validator from 'validator';

const client = createId;

const userSchema = new mongoose.Schema({
    _id: {type: String, default: () => client()},
    firstName:{
        type: String,
        minlength: 3,
        maxlength: 40,
        required: true,
        trim: true,
        validate:{
            validator: str => /^[a-zA-Z]+$/.test(str),
            message: "Name must only contain letters"
        }
    },
    lastName:{
        type: String,
        minlength: 3,
        maxlength: 40,
        required: true,
        trim: true,
        validate:{
            validator: str => /^[a-zA-Z]+$/.test(str),
            message: "Name must only contain letters"
        }
    },
    email:{
        type: String,
        required: true,
        trim: true,
        validate:{
            validator: validator.isEmail,
            message: "Enter a valid email",
        }
    },
    message:{
        type: String,
        minlength: 20,
        maxlength: 200,
        required : true,
    }

}, {timestamps : true});


export const User = mongoose.model('User', userSchema);
