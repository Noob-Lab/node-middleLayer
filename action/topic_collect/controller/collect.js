
const topic_collect = require('../model')


module.exports = (path,router) => {

    router
        .post(path,(req, res) => {

            topic_collect.collect(req.body.accesstoken,req.body.topic_id)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });

        })


}