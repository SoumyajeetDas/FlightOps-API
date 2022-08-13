const mongoose = require('mongoose');


const mySumoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "SavedSearchWithScheduleSyncDefinition"
    },
    name: {
        type: String,
        unique: true
    },

    // search:mongoose.Schema.Types.Mixed,
    search: {
        queryText: String,
        defaultTimeRange: String,
        byReceiptTime: {
            type: Boolean,
            default: false
        },
        viewName: {
            type: String,
            default: ""
        },
        viewStartTime: Date,
        queryParameters: [String],
        parsingMode: {
            type: String,
            default: "AutoParse"
        }
    },

    searchSchedule: {
        type: Date,
        default: null
    },
    description: {
        type: String,
        default: ""
    }
});



const MySumo = new mongoose.model('mysumoqueries', mySumoSchema);


module.exports = MySumo;