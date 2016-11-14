const scm = require('../../../plugins/server-conf-merge/')

module.exports.getTopic = (page,tab,limit)=>
    scm ('condeGet', {
        data: {page,tab,limit},
        uri:'/api/v1/topics'
    })


module.exports.creatTopic = (accesstoken,title,tab,content) =>
	scm ('condePost',{
          uri: '/api/v1/topics',
          data: {accesstoken,title,tab,content},
          json: true
        })


module.exports.updateTopic = (accesstoken,topic_id,title,tab,content) =>
    scm ('condePost',{
        uri: '/api/v1/topics/update',
        data: {accesstoken,topic_id,title,tab,content},
        json: true // Automatically stringifies the body to JSON
    })



