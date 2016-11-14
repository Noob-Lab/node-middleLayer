const conf = require('../')




module.exports={

    condeGet:{ //get请求
        method:'GET',
        uri:conf.servername.url,
        json: true
    },
    condePost:{//post请求
        method:'POST',
        uri:conf.servername.url
    }

}

