const Triage = require('../models/triageModel')



exports.getAllTriage = async (req, res, next) => {


    const triageData = await Triage.find().sort({name:1});


    try {
        res.status(200).send({
            status: '200 OK',
            length: triageData.length,
            data: {
                triage: triageData
            }
        });
    }
    catch(err){
        res.status(500).send({
            status: '500 Internal Server Error',
            message:err.message
        })
    }

    
}