const topic = require('../model')

module.exports = (path,router) => {

    router
        .route(path)
        .get((req,res)=>{

            topic.getTopic(req.params.id)
                .then(res.jsonp.bind(res))
                .catch(function (err) {
                    res.send(err.response.body)
                });
        })

    
}