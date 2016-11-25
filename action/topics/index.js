const express = require('express');
const router = express.Router();

const topics = require('./controller')
const update = require('./controller/update')



topics('/getTopics',router)
update('/update',router)




module.exports = router
