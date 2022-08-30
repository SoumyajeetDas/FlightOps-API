const mongoose = require('mongoose');


const sevSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title of the Ticket"],
        unique:true
    },
    tickNos: {
        type: String,
        required:[true,"Please enter the Ticket No. or keep as N/A"],
    },
    miNos:{
        type: String,
        required:[true,"Please enter the MI No. or keep as N/A"],
    },
    applications:{
        type:String,
        required:[true,"Please enter the application type"],
        enum:['ACARS','Aircraft Performance','FOGS','Jetplan','Pilot Briefing','QXEFB','S4A','VisOps', 'VisOps DB' ,'WAM', 'Weather', 'WebSendTimes', 'Related to other Team']
    },
    ticketType:{
        type:String,
        required:[true,"Please enter the type of Ticket"],
        enum:['Sev1','Sev2']
    },
    // "2022-06-19"
    timeOccured:{
        type:Date,
        required:[true,"Please enter the date"]
    },
    description:String,
    link:{
        type:String,
        trim:true
    }
});


const Sevs = mongoose.model('sevdatas',sevSchema);


module.exports = Sevs;