/**
 * Created by dipper on 2016/11/14.
 */
const express = require('express');
const router = express.Router();
const user = require('./controller');
const token = require('./controller/accessToken')

//设置用户信息路由
user("/:loginname",router);
token("/token",router);


module.exports = router;