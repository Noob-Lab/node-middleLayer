
const topics = require('../model')


module.exports = (path,router) => {

    router
        .route(path)
        /**
         * @apiGroup topics
         * @apiDescription 获取首页列表
         * @api {get} /topics/getTopics 主题首页
         * @apiName getTopics
         * @apiVersion 1.0.0
         *
         * @apiParam {Number} page  页数
         * @apiParam {string} tab  主题分类。目前有 ask share job good
         * @apiParam {Number} limit 每一页的主题数量
         *
         * @apiSuccess {bool} success true
         * @apiSuccess {array} data 数据
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "success": true,
         *       "data": [
         *          {
         *             "id": "581b0c4ebb9452c9052e7acb",
         *             "author_id": "5110f2bedf9e9fcc584e4677",
         *             "tab": "share",
         *             "content": "<div></div>"
         *          }
         *       ]
         *     }
         *
         * @apiError UserNotFound The id of the User was not found.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "UserNotFound"
         *     }
         *
         * @apiSampleRequest /topics/getTopics
         */
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