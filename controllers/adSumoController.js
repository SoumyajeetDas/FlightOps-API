const AdSumo = require('../models/adSumoModel')


exports.getallAdeleSumo = async (req, res) => {

    try {
        const adSumoData = await AdSumo.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: adSumoData.length,
            data: {
                adeleSumo: adSumoData
            }
        })
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }

}