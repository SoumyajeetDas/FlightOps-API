const DBQuery = require('../models/dbQueryModel');



exports.getAllDBQuery = async (req, res) => {

    try {
        const dbQueryData = await DBQuery.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: dbQueryData.length,
            data: {
                dbQuery: dbQueryData
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