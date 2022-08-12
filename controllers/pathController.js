const Path = require('../models/pathModel')



exports.getAllPaths = async (req, res) => {

    try {
        const pathData = await Path.find().sort({ name: 1 });

        res.status(200).send({
            status: '200 OK',
            length: pathData.length,
            data: {
                path: pathData
            }
        });
    }

    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }
}