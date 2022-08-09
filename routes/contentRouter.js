const express = require('express');
const triageController = require('../controllers/triageController');
const opsCentralController = require('../controllers/opsCentralController')

const router = express.Router();



// Route for Traige
router
.get("/triage",triageController.getAllTriage);


// Router for OpsCentralLinks
router
.get("/opsCentral",opsCentralController.getAllOpsCentral)


module.exports = router;