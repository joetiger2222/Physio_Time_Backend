const mongoose = require('mongoose');

const doctorDaysSchema=mongoose.Schema({
    date:{
        type:String,
        required:true,
    },
    start:{
        type:String,
        required:true,
    },
    end:{
        type:String,
        required:true,
        unique:true,
    },
    
})

module.exports=mongoose.model('doctordays',doctorDaysSchema)