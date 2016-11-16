/**
 * Created by dipper on 2016/11/14.
 */
const user = require('../model')

//使用
module.exports = (path,router) => {
    router
        .route(path)
        .get((req,res)=>{
        user.getUser(req.params.loginname)
        .then(res.jsonp.bind(res))
        .catch(function (err) {
            res.send(err.response.body)
        });

    })


}