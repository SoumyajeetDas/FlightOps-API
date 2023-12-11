const mongoose = require('mongoose')
const MySumo = require('../models/mySumoModel')
const AppInsight = require('../models/appInsightModel')
const AdSumo = require('../models/adSumoModel')
const DBQuery = require('../models/dbQueryModel');
const Path = require('../models/pathModel')
const CriticalSystem = require('../models/criticalSystemModel');
const OpsCentral = require('../models/opsCentralModel');
const Triage = require('../models/triageModel')
const dotenv = require('dotenv');


//Configuring the required environment into Node JS which is present in config.env file.
dotenv.config({ path: './config.env' });





// Connecting to DB
const connectionString = process.env.DB_CONNSRTING.replace('<password>', process.env.DB_PASSWORD);



mongoose.connect(connectionString).then(() => {
    console.log("Database Successfully Connected")
}).catch((err) => {
    var error = {
        status: "Cannot Connect to DB",
        error: err
    }
    console.log(error)
})




const insertMySumo = async () => {
    try {
        await MySumo.create({
            name: "Amended Flight Release Sent to S4A TIBCO Logs",
            search: {
                queryText: "_sourcecategory = \"Tibco_BW_Audit\" AND AMEND AND \"QX/2235/2023-12-10/PDX/BOI\" AND \"SENT-TO-SMARTLOAD\"",
                defaultTimeRange: "-60m",
                viewStartTime: "1970-01-01T00:00:00Z",
                queryParameters: [],
            }
        });

        console.log("Document Added");
    }
    catch (err) {

        console.log("Error : ", err.message)
    }

    process.exit();
}

const adeleSumo = async () => {
    try {
        await AdSumo.create({
            name: "Testing",
            search: {
                queryText: "dwdowdowjdowjdowd",
                defaultTimeRange: "-60m",
                viewStartTime: "1970-01-01T00:00:00Z",
                queryParameters: [],
            }
        })

        console.log("Document Added");
    }
    catch (err) {

        console.log("Error : ", err.message)
    }

    process.exit();
}

const insertAppInsight = async () => {
    try {
        await AppInsight.create({
            name: "Testing",
            path: [
                "FlightPlanSvc/FlightPlanRequest",
                "Jeppesen websvc connection"
            ],
            note: "In FlightPlanSvc/FlightPlanRequest Property=Request Response Code 400 --> This property is not working now and will be updated and Jeppesen WebSvc Connection gives info about the JEP Down Issue"
        });

        console.log("Document Added");
    }

    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();
}


const insertDBQuery = async () => {
    try {
        await DBQuery.create({
            name: "Testing",
            path: [
                "select * from delayhistory where fltsegid=",
                "select * from subdelays where fltsegid=",
                "select d_delay,* from fltseg where orig='' and localdate=today-1",
                "select * from userroles where userid=''",
                "select * from flight_history where fltsegid= order by lastmodtime"
            ]
        });

        console.log("Document Added");
    }

    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();
}


const insertPath = async () => {
    try {
        await Path.create({
            name: "Testing",
            path: [
                "\\\\TUKPRFOADATA01\\Log\\Fogs",
                "\\\\seaprfoadata01\\Log\\Fogs"
            ]
        });

        console.log("Document Added");
    }

    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();
}


const insertCriticalSystem = async () => {
    try {
        await CriticalSystem.create({
            "name": "Testing",
            "path": "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Forms/",
            "smes": "N/A",
            "vendors": "N/A"
        })
        console.log("Data Suceesfully Added")
    }
    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();

}


const insertOpsCentral = async () => {
    try {
        await OpsCentral.create({
            name: "Testing",
            path: "http://fogscentral.insideaag.com/WxServer.ashx"
        })
        console.log("Document Successfully Added")
    }
    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();
}


const insertTriage = async () => {
    try {
        await Triage.create({
            name: "Testing",
            path: "https://alaskaair.sharepoint.com/:w:/r/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BEED2AD09-46E8-4E63-BC6E-D4D45641FA52%7D&file=Visops_Triage_Troubleshooting.docx&action=default&mobileredirect=true"
        });
        console.log("Document Successfully Added")
    }
    catch (err) {
        console.log("Error : ", err.message)
    }
    process.exit();
}

if (process.argv[2] === '--insertMySumo') {

    //  node scripts/script.js --insertMySumo     

    insertMySumo();
}
else if (process.argv[2] === '--adeleSumo') {

    // node scripts/script.js --adeleSumo   

    adeleSumo();
}
else if (process.argv[2] === '--insertAppInsight') {

    // node scripts/script.js --insertAppInsight   

    insertAppInsight();
}
else if (process.argv[2] === '--insertInformixQuery') {

    // node scripts/script.js --insertInformixQuery

    insertDBQuery();
}
else if (process.argv[2] === '--insertPath') {

    // node scripts/script.js --insertPath

    insertPath();
}
else if (process.argv[2] === '--insertCriticalSystem') {

    // node scripts/script.js --insertCriticalSystem

    insertCriticalSystem();
}
else if (process.argv[2] === '--insertOpsCentral') {

    // node scripts/script.js --insertOpsCentral 

    insertOpsCentral();
}
else if (process.argv[2] === '--insertTriage') {

    // node scripts/script.js --insertTriage

    insertTriage();
}