const Sev = require('../models/sevModel');


exports.getSev = async (req, res) => {
    try {
        const sevData = await Sev.find().sort({ timeOccured: 1 });

        if(sevData.length===0){
            return res.status(400).send({
                status: '400 Bad Request',
                message: "No data to show"
            })
        }

        res.status(200).send({
            status: '200 OK',
            length: sevData.length,
            data: {
                sevs: sevData
            }
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }
};



exports.addData = async (req, res) => {

    try {
        const newSev = await Sev.create(req.body);

        res.status(201).send({
            status: '201 Created',
            newSev
        });
    }

    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }

};


exports.updateData = async (req, res) => {


    try {
        
        const sevData = await Sev.findById(req.params.id);

        if(!sevData){
            return res.status(400).send({
                status: '400 Bad Request',
                message: "Severity Incident is not present"
            })
        }

        const updatedSev = await Sev.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            });

        res.status(200).send({
            status: 'Data got updated',
            updatedSev
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }
}


exports.deleteData = async (req, res) => {


    try {

        const sevData = await Sev.findById(req.params.id);

        if(!sevData){
            return res.status(400).send({
                status: '400 Bad Request',
                message: "Severity Incident is not present"
            })
        }

        await Sev.findByIdAndDelete(req.params.id);

        res.status(200).send({
            status: '200 Ok',
            message:"Data got deleted"
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }
}

