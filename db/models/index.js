var mongoose = require('mongoose');
var config   = require('../../config');
var log4js = require('../../plugins/log4js-log').uselog('db');

//https://cnodejs.org/topic/579c96bcda05b9e92af32583
//解决下面的错误信息
//Mongoose: mpromise (mongoose’s default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

mongoose.connect(config.mongodb.url, {
    server: {poolSize: 20},
    user:config.mongodb.username,
    pass:config.mongodb.password

}, function (err) {
    if (err) {
        log4js.error('connect to %s error: ',config.mongodb.url, err.message);
        process.exit(1);
    }
});

// models
require('./user');


exports.User = mongoose.model('User');

