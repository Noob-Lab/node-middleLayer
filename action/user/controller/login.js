/**
 * Created by dengchongjing on 2016/11/24.
 */


const mongo = require('../../../plugins/db')
const logger = require('../../../plugins/log4js-log/').logger('db')



//使用
module.exports = (path,router) => {
    router
        .route(path)
        .get((req,res)=>{
            res.render('login', { title: '登录' });
        })
        .post((req,res) => {


            const user = {'username':req.body.username,'password':req.body.password}

            mongo.connect().then(db=>{

                const users = db.collection('users')

                users.findOne({'username':req.body.username})
                    .then(result=>{

                        if(!user.username){

                            res.jsonp({
                                code:1,
                                msg:'没有填写用户名'
                            })

                        }else if(!user.password){

                            res.jsonp({
                                code:2,
                                msg:'没有填写密码'
                            })

                        }else if(result){

                            res.send( '登录成功' );

                        }else{

                            res.jsonp({
                                code:3,
                                msg:'用户名或密码错误'
                            })
                            
                        }

                    }).then(()=>{
                    db.close()
                })

            }).catch(err=>{
                logger.error(err)
                res.send( err );
            }).done()

        })



}