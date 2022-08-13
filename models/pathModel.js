const mongoose = require('mongoose');


const pathSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        unique: true
    },
    path: {
        type: [String],
        // required:[true, "Please enter the path"]

        validate: {
            validator: function (val) {
                return Array.isArray(val) && val.length > 0
            },
            message: "Please enter the Paths",
        }
    }
});


const Path = mongoose.model('paths', pathSchema);


module.exports = Path;