const mongoose = require('mongoose');


const pathSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        unique: true
    },
    path: {
        type: [String],
        required: [true, "Please enter the path"]
    },
});


const Path = mongoose.model('paths',pathSchema);


module.exports = Path;