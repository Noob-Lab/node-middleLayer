/**
 * Created by dipper on 2016/11/16.
 */
const message = require('../model');
/**
 * 获取用户所有信息
 */
module.exports = (path,router)=>{
    router.route(path)
        .get(function(req,res){
            var accesstoken = req.query.accesstoken
              return   message.getMessages(accesstoken)
                    .then(res.jsonp.bind(res))
                    .catch(function(err){
                            res.send(err.response.body)
                     })
        })
}