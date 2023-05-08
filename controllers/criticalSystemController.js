const CriticalSystem = require('../models/criticalSystemModel');


exports.getallCriticalSystem = async (req, res) => {

    try {
        const criticalSystemData = await CriticalSystem.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: criticalSystemData.length,
            data: {
                dbData: criticalSystemData
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
