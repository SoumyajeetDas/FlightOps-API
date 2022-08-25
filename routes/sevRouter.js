const express = require('express');
const sevController = require('../controllers/sevController')


const router = express.Router();


router.use(express.json());


router
.route("/")
.post(sevController.addData)
.get(sevController.getSev);


router
.route("/:id")
.put(sevController.updateData)
.delete(sevController.deleteData)


// Get the Stats
router.get("/stats",sevController.getStats);


module.exports = router;