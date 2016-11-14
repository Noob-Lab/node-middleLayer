const topics = require('../action/topics');
const topic = require('../action/topic');
const topic_collect = require('../action/topic_collect');


module.exports = function(app){

    app.use('/topics',topics)
    app.use('/topic',topic)
    app.use('/topic_collect',topic_collect)

};
