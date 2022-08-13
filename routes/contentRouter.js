const express = require('express');
const triageController = require('../controllers/triageController');
const opsCentralController = require('../controllers/opsCentralController')
const appInsightController = require('../controllers/appInsightController')
const pathController = require('../controllers/pathController')
const dbQueryController = require('../controllers/dbQueryController')
const criticalSystemController = require('../controllers/criticalSystemController')

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


// Router for Informix DB Query
router
.get("/dbQuery",dbQueryController.getAllDBQuery)



// Router for Critical System
router
.get("/criticalsystem",criticalSystemController.getallCriticalSystem)



module.exports = router;