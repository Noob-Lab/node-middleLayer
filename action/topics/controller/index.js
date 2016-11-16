
const topics = require('../model')

const log = require("../../../plugins/log4js-log").logger();

module.exports = (path,router) => {

    router
        .route(path)
        .get((req,res)=>{

            topics.getTopic(req.query.page,req.query.tab,req.query.limit)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });
        })
        .post((req, res) => {
            topics.creatTopic(req.body.accesstoken,req.body.title,req.body.tab,req.body.content)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });

        })

}