const scm = require('../../../plugins/server-conf-merge/')

module.exports.getTopic = (page,tab,limit)=>
    scm ('condeGet', {
        uri:'/api/v1/topics',
        qs: {page,tab,limit},

    })


module.exports.creatTopic = (accesstoken,title,tab,content) =>
	scm ('condePost',{
          uri: '/api/v1/topics',
          form: {accesstoken,title,tab,content},
          json: true
        })


module.exports.updateTopic = (accesstoken,topic_id,title,tab,content) =>
    scm ('condePost',{
        uri: '/api/v1/topics/update',
        form: {accesstoken,topic_id,title,tab,content},
        json: true // Automatically stringifies the body to JSON
    })



