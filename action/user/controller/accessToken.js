/**
 * Created by dipper on 2016/11/15.
 */
const user = require('../model')

//使用
module.exports = (path,router) => {

    router
        .route(path)
        .post((req,res)=>{
        var accesstoken = (typeof req.body.accesstoken !== 'undefined')?req.body.accesstoken:req.query.accesstoken

       return user.accessToken(accesstoken)
        .then( res.jsonp.bind(res))
        .catch(function (err) {
            res.send(err.response.body)
        });

})


}