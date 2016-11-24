/**
 * Created by dipper on 2016/11/14.
 */
const express = require('express');
const router = express.Router();
const user = require('./controller');
const token = require('./controller/accessToken')
const signup = require('./controller/signUp')
const login = require('./controller/login')

//设置用户信息路由
user("/loginname/:loginname",router);
token("/token",router);
signup('/signup',router);
login('/login',router);



module.exports = router;