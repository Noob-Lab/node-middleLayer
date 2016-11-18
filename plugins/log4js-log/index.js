const path = require('path');
const fs = require('fs-extra');
const log4js_conf = require('../../config/log4js/');
const log4js = require("log4js");


/**
 * 日志配置
 */

    for(var i=0,len=log4js_conf.appenders.length; i<len; i++){
        if(log4js_conf.appenders[i].category){
            fs.ensureDirSync('./logs/'+log4js_conf.appenders[i].category)
        }
    }

    log4js.configure(log4js_conf)


/**
 * 暴露到应用的日志接口，调用该方法前必须确保已经configure过
 * @param name 指定log4js配置文件中的category。依此找到对应的appender。
 *              如果appender没有写上category，则为默认的category。可以有多个
 * @returns {Logger}
 */
module.exports.logger = name => {
    const dateFileLog = log4js.getLogger(name);
    dateFileLog.setLevel(log4js.levels.INFO);
    return dateFileLog
}

// 六种log级别trace、debug、info、warn、error、fatal
// const log = require("../../../plugins/log4js-log").logger();
// log.debug('test')



/**
 * 用于express中间件，调用该方法前必须确保已经configure过
 * @returns {Function|*}
 */
module.exports.uselog = name => log4js.connectLogger(log4js.getLogger(name), {level: log4js.levels.INFO,format:':method :url'})

