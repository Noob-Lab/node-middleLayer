const scm = require('../../../plugins/server-conf-merge/')

module.exports.getTopic = id =>
    scm ('condeGet', {
          uri:'/api/v1/topic/'+id
        })



