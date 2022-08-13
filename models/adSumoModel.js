const mongoose = require('mongoose');


const adSumoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "SavedSearchWithScheduleSyncDefinition"
    },
    name: {
        type: String,
        unique: true
    },

    // search:mongoose.Schema.Types.Mixed,
    // search:mongoose.Schema.Types.Mixed,
    search: {
        queryText: {
            type: String,
            required: [true, "Please enter the queryText"]
        },
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



const AdSumo = mongoose.model('adsumoqueries', adSumoSchema);


module.exports = AdSumo;