const express = require('express');
const router = express.Router();

const collect = require('./controller/collect')
const de_collect = require('./controller/de_collect')



collect('/collect',router)
de_collect('/de_collect',router)



module.exports = router
