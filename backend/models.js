const mongoose = require('mongoose')
const employee = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Employee", employee)