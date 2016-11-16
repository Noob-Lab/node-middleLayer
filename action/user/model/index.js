/**
 * Created by dipper on 2016/11/15.
 */
const scm = require('../../../plugins/server-conf-merge/')

//设置查询用户信息链接和请求数据
module.exports.getUser = (loginname)=>

scm ('condeGet', {
    uri:'/api/v1/user/'+loginname
})

module.exports.accessToken = (accesstoken)=>{

       return  scm('condePost', {
           form: {accesstoken},
            uri: '/api/v1/accesstoken'
        })

}






