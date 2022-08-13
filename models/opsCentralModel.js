const mongoose = require('mongoose');


const opsCentralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        unique: true
    },
    path: {
        type: String,
        required: [true, "Please enter the path"],
        trim: true
    }
});



const OpsCentral = mongoose.model('opscentrals', opsCentralSchema)

module.exports = OpsCentral;