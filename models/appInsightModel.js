const mongoose = require('mongoose');


const appInsightSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter the name"]
    },
    path:{
        type:[String],
        required:[true, "Please enter the path"]
    },
    note:String
});


const AppInsight = mongoose.model('appinsights',appInsightSchema);


module.exports = AppInsight;