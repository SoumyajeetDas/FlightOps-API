const mongoose = require('mongoose');


const dbQuerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        unique: true
    },
    //    path:[{type:String, required: true, trim:true}]
    path: {
        type: [String],
        required: [true, "Please enter the path"],
        trim:true
    }
});



const DbQuery = mongoose.model('dbQueries', dbQuerySchema);


module.exports = DbQuery;