const scm = require('../../../plugins/server-conf-merge/')

module.exports.collect = (accesstoken,topic_id) =>
	 scm ('condePost',{
          uri: '/api/v1/topic_collect/collect',
          form: {accesstoken,topic_id},
          json: true
        })



module.exports.de_collect = (accesstoken,topic_id) =>
    scm ('condePost',{
        uri: '/api/v1/topic_collect/de_collect',
        form: {accesstoken,topic_id},
        json: true
    })




module.exports.getLoginname = loginname =>
    scm ('condeGet',{
        uri: '/api/v1/topic_collect/'+loginname,
        json: true
    })