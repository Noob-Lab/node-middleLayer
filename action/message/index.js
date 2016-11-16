/**
 * Created by dipper on 2016/11/16.
 */
const express = require('express');
const router = express.Router();

const messages = require('./controller');
const mark_all = require('./controller/markAll');
const messageCount = require('./controller/messageCount')

messageCount('/count',router);
messages('/messages',router);
mark_all('/mark_all',router);

module.exports = router;