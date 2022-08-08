const mongoose = require('mongoose')



const triageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide the name"],
        unique:true
    },
    path:{
        type:String,
        required:[true,"Please provide the link"],
        trim:true
    }
});



let Triage = mongoose.model('triages',triageSchema);


module.exports = Triage;