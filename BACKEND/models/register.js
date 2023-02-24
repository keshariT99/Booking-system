const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType:String
    }
   

})

//implementation of create model
const Reg_cus = mongoose.model("Register_cus",registerSchema);

module.exports = Reg_cus;