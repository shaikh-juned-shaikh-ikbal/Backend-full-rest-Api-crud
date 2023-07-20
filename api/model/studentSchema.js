const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    gender:String,
    age:Number
})

module.exports = mongoose.model('Student' , studentSchema)