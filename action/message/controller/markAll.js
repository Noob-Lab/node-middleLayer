/**
 * Created by dipper on 2016/11/15.
 */
const message = require('../model')

/**
 * 标记全部已读
 */
module.exports = (path,router) => {

    router
        .route(path)
        .post((req,res)=>{
    var accesstoken = req.query.accesstoken
   return message.postMarkAll(accesstoken)
        .then( res.jsonp.bind(res))
        .catch(function (err) {
            res.send(err.response.body)
        });

})


}