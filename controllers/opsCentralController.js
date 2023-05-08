const OpsCentral = require('../models/opsCentralModel');


exports.getAllOpsCentral = async (req, res) => {


    try {
        let opsCentralData = await OpsCentral.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: opsCentralData.length,
            data: {
                dbData: opsCentralData
            }
        })
    }

    catch(err){
        res.status(500).send({
            status: '500 Internal Server Error',
            message:err.message
        })
    }
    
    
}