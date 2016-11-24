const express = require('express');
const router = express.Router();

const topic_collect = require('./controller')
const collect = require('./controller/collect')
const de_collect = require('./controller/de_collect')


topic_collect('/loginname/:loginname',router)
collect('/collect',router)
de_collect('/de_collect',router)



module.exports = router
