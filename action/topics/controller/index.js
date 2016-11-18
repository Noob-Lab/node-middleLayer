
const topics = require('../model')

// const log = require("../../../plugins/log4js-log").logger();

// const db = require("../../../plugins/db");

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

            //
            // db.on('error',console.error.bind(console,'连接错误:'));
            // db.once('open',function(){
            //     //一次打开记录
            // });


            topics.creatTopic(req.body.accesstoken,req.body.title,req.body.tab,req.body.content)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });

        })

}