var express = require('express');

var router = express.Router();
module.exports = function(app){

    app.use('/topics',require('../action/topics'))
    app.use('/topic',require('../action/topic'))
    app.use('/topic_collect',require('../action/topic_collect'))
    app.use('/user',require('../action/user'))

    app.use('/message',require('../action/message'))
};
