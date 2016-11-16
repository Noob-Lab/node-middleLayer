const path = require("path");
const log4js = require("log4js");


/**
 * 日志配置
 */

    log4js.configure('./config/log4js/log4js_conf.json')



/**
 * 暴露到应用的日志接口，调用该方法前必须确保已经configure过
 * @param name 指定log4js配置文件中的category。依此找到对应的appender。
 *              如果appender没有写上category，则为默认的category。可以有多个
 * @returns {Logger}
 */
exports.logger = name => {
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
exports.useLog = name => log4js.connectLogger(log4js.getLogger('name'), {level: log4js.levels.INFO,format:':method :url'})

