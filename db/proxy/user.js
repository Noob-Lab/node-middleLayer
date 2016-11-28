var models  = require('../models');
var User    = models.User;




/**
 * 根据用户username，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} username 用户名
 * @param {Function} callback 回调函数
 */
exports.getUsername = function (username, callback) {
    if (!username) {
        return callback();
    }
    try {
        User.findOne({username: username}, callback);
    }catch(e){
        alert(e);
    }
};


/**
 * 注册用户信息
 * @param {String} loginname 用户名
 * @param {String} pass 用户密码
 * @param {Function} callback 回调函数
 */
exports.signup = function (loginname, pass, callback) {
    var user         = new User();
    user.username        = loginname;
    user.password        = pass;

    user.save(callback);

};


