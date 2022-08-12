const express = require('express');
const triageController = require('../controllers/triageController');
const opsCentralController = require('../controllers/opsCentralController')
const appInsightController = require('../controllers/appInsightController')
const pathController = require('../controllers/pathController')

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


// Router for Path
router
.get("/paths",pathController.getAllPaths)

module.exports = router;