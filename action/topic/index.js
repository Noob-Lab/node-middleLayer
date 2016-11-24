const express = require('express');
const router = express.Router();

const topic = require('./controller')


topic('/id/:id',router)




module.exports = router
