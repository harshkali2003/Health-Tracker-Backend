const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    datOfRecord : {
        type:Date,
        default:Date.now(),
        required: true
    },
    bodyTemperature : {
        type : Number,
        required : true
    },
    bloodPressure : {
        // systolic: {
        //     type: Number, 
        //     required: true
        //   },
        //   diastolic: {
        //     type: Number, 
        //     required: true
        //   }
        type:String,
        required:true
    },
    heartRate : {
        type : Number,
        required: true
    }

})

module.exports = mongoose.model('healthRecord' , productSchema)