const AppInsight = require('../models/appInsightModel')



exports.getAllAppInsight = async (req, res) => {

    try {
        const appInsightData = await AppInsight.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: appInsightData.length,
            data: {
                dbData: appInsightData
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