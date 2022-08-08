const express = require('express');
const triageController = require('../controllers/triageController')

const router = express.Router();


router
.route("/triage")
.get(triageController.getAllTriage);



module.exports = router;