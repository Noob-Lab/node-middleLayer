const express = require('express');
const router = express.Router();

const topics = require('./controller')
const update = require('./controller/update')



topics('/topics',router)
update('/update',router)




module.exports = router
