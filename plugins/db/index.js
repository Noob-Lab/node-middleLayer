
const mongo = require('mongodb-bluebird');
const conf = require('../../config/')


console.log(conf)

module.exports.connect = (url)=> {
    if(url){
        return mongo.connect(url)
    }else{
        return mongo.connect(conf.mongodb.url)
    }
}
