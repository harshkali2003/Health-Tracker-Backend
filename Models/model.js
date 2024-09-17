const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    datOfRecord : {
        type:Date,
        default:Date.now(),
        required: true
    },
    bodyTemperature : {
        type : String,
        required : true
    },
    bloodPressure : {
        type:String,
        required:true
    },
    heartRate : {
        type : String,
        required: true
    }

})

module.exports = mongoose.model('healthRecord' , productSchema)