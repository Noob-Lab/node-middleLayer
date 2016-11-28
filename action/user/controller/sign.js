 
var User           = require('../../../db').User;
 

//sign up
exports.showSignup = function (req, res) {
  res.render('signup');
};

exports.signup = function (req, res, next) {
  var loginname = req.body.username;

  var pass      = req.body.password;

  var message = {};



  // 验证信息的正确性
  if ([loginname, pass].some(function (item) { return item === ''; })) {
    message = {code: '10002', message: '信息不完整'}

    res.render('signup',message);
    return;
  }

  // END 验证信息的正确性


   User.getUsername( loginname,function(err,user){

    if (user) {

      message = {code: '10001', message: '用户名已被使用。'}

      res.render('signup',message);
      return;
    }




  User.signup(loginname, pass, function (err) {
    if (err) {
      return next(err);
    }


    res.render('signup', {
      code: 0,
      message: '欢迎加入 ！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。'
    });
  });


  })


  }




