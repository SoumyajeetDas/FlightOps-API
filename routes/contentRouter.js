const express = require('express');
const triageController = require('../controllers/triageController');
const opsCentralController = require('../controllers/opsCentralController')
const appInsightController = require('../controllers/appInsightController')

const router = express.Router();



// Route for Traige
router
.get("/triage",triageController.getAllTriage);


// Router for OpsCentralLinks
router
.get("/opsCentral",opsCentralController.getAllOpsCentral)


// Router for AppInsight
router
.get("/appInsight",appInsightController.getAllAppInsight)



module.exports = router;