const topics = require('../action/topics');
const topic = require('../action/topic');
const topic_collect = require('../action/topic_collect');
const user = require('../action/user')
const message = require('../action/message');


module.exports = function(app){


    app.use('/topics',topics)
    app.use('/topic',topic)
    app.use('/topic_collect',topic_collect)
    app.use('/user',user)

    app.use('/message',message)
};
