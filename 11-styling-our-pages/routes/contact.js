const express = require('express');
const router = express.Router();


const contactusController = require('../controllers/contactusController'); 

router.get('/contactus',contactusController.getContactUs)
router.post('/contactus',contactusController.postContactUs)
module.exports = router;