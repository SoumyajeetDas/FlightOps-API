const MySumo = require('../models/mySumoModel')



exports.getAllmySumoQueries = async (req, res) => {

    try {
        const mySumoQueryData = await MySumo.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: mySumoQueryData.length,
            data: {
                dbData: mySumoQueryData
            }
        })
    }
    catch(err){
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }
   
}