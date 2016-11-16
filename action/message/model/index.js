/**
 * Created by dipper on 2016/11/16.
 */
const scm = require('../../../plugins/server-conf-merge/')

module.exports.getMessageCount =  (accesstoken) =>
scm('condeGet',
    {uri:'/message/count',
    data:{accesstoken}})


module.exports.getMessages = (accesstoken)=>
scm('condeGet',{
    uri:'/messages',
    data:{accesstoken}
    }
)


module.exports.postMarkAll = (accesstoken)=>
        scm('condePost',
            {
                uri:'/message/mark_all',
                form:{accesstoken}
            }
        )