/**
 * Created by dengchongjing on 2016/11/22.
 */

const mongo = require('../../../plugins/db')
const logger = require('../../../plugins/log4js-log/').logger('db')



//使用
module.exports = (path,router) => {
    router
        .route(path)
        .get((req,res)=>{
            res.render('signup', { title: '注册' });
        })
        .post((req,res) => {


            const user = {'username':req.body.username,'password':req.body.password}

            mongo.connect().then(db=>{

                const users = db.collection('users')

                users.findOne({'username':req.body.username})
                    .then(result=>{

                        if(result){

                            res.jsonp({
                                code:1,
                                msg:'用户名已存在'
                            })

                        }else if(!user.password){

                            res.jsonp({
                                code:2,
                                msg:'没有填写密码'
                            })

                        }else{
                            users.insert(user,{safe:true}).then(()=>{

                                res.send( '注册成功' );

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