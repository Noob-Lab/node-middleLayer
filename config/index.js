
// 此配置文件适合多人合作设置各自不同环境的配置信息
var env      = 'dev'; // dev or product
var developer = 'mewtwo'; // 开发者：defaults,your name，默认是系统默认的配置，开发者名字按照各自环境配置自己的配置文件信息,适合多人合作情况
var protocol     = 'https://'; //http:// or https:// 请求后端服务的协议

var settings = {
    base: {
        appName: "cNode-api",
        version: "0.0.1",
        env: env,
        cookie: {
            secret: "weXin",
            id: 'api'
        },
        session: {
            secret: "weXin",
            id: 'api'
        },
        desc:'基本配置'
    },
    dev: {
        defaults: {
            servername: {
                host: "127.0.0.1",
                port: 5000
            },
            mongodb: {
                host: "localhost",
                port: "27017",
                dbname: "xcx",
                username: "",
                password: ""
            },
        },
        mewtwo: {
            servername: {
                host: "cnodejs.org",
                port: ''
            },
            mongodb: {
                host: "localhost",
                port: "27017",
                dbname: "xcx",
                username: "",
                password: ""
            },
        },
        desc:'开发环境配置'
    },
    product: {
        servername: {
            host: "",
            port: 80
        },
        mongodb: {
            host: "",
            port: "",
            dbname: "xcx",
            username: "uname",
            password: "pwd"
        },
        desc: '网站发布地址配置'
    }
}

const c = env === 'dev' ? settings[env][developer] : settings[env],
    mongo = c.mongodb,
    servername = c.servername;
    port = servername.port ? ':'+servername.port : '';

c.mongodb.url = "mongodb://" + mongo.host + ":" + mongo.port + "/" + mongo.dbname;

c.servername.url = protocol + servername.host + port;
c.servername.protocol = protocol;

module.exports = Object.assign(settings.base,c)