const mongoose = require('mongoose');


const criticalSystemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        unique: true
    },
    path: {
        type: String,
        required: [true, "Please enter the path"],
        trim:true,
        unique: true
    },
    smes: {
        type: String,
        required: [true, "Please enter the smes and if not there enter N/A"]
    },
    vendors: {
        type: String,
        required: [true, "Please enter the vendors and if not there enter N/A"]
    }
});



const CriticalSystem = mongoose.model('criticalsystems',criticalSystemSchema);



module.exports = CriticalSystem;