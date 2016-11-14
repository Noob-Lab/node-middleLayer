
const topics = require('../model')


module.exports = (path,router) => {


    router.post(path, (req, res)=>{

        topics.updateTopic(req.body.accesstoken,req.body.topic_id,req.body.title,req.body.tab,req.body.content)
            .then(res.jsonp.bind(res))
            .catch(function (err) {
                res.send(err.response.body)
            });

    })


}