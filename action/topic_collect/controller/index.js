
const topic_collect = require('../model')


module.exports = (path,router) => {

    router.get(path,(req,res)=>{
        topic_collect.getLoginname(req.params.loginname)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });
        })

}