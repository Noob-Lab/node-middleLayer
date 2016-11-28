/**
 * Created by dipper on 2016/11/14.
 */
const express = require('express');
const router = express.Router();
const user = require('./controller')
const token = require('./controller/accessToken')
const sign = require('./controller/sign')

//设置用户信息路由
user("/loginname/:loginname",router);
token("/token",router);

router.get('/signup',sign.showSignup) //注册页面
router.post('/signup', sign.signup);  // 提交注册信息





module.exports = router;