import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema =new mongoose.Schema({
    userName:{
        type: String,
        minLength: [3, "username must contain minimum 3 character"],
        maxLength: [40, "userName can not exceed from 40 charcater"]
    },
    password:{
        type: String,
        selected:false,
        minLength: [8, "password must contain minimum 8 character"],
        maxLength: [32, "password can not exceed from 32 charcater"]
    },
    email: String,
    address: String,
    phone: {
        type: String,
        minLength:[10, "phone number must contains exact 10 digits"],
        maxLength: [10, "phone number must contains exact 10 digits"],
    },
    profileImage: {
        public_id:{
            type: String,
            required: true,
        },
        url: {
            type: String,
            required : true,
        },
    },
    paymentMethods: {
        bankTransfer:{
            bankAccountNumber : String,     
            bankAccountName: String,
            bankName: String,
        },
        paypal: {
            paypalEmail: String,
        },
    },

    role:{
        type: String,
        enum: ["Auctioner", "Bidder", "Super Admin"]
    },
    // save the 5% of commision of an bid, after selling any product
    unpaidCommission : {
        type: Number,
        default: 0
    },
    auctionsWon:{
        type: Number,
        default: 0
    },
    moneySpent: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model("User", userSchema);