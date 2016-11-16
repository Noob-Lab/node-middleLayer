const rp = require('request-promise')
const server = require('../../config/server/')


module.exports = (name,obj) => {

    console.log("name "+name+" url "+server[name].uri+obj.uri);
    const o = {
        uri:server[name].uri+obj.uri
    }


    return rp( Object.assign({},server[name],obj,o) )

}


 

