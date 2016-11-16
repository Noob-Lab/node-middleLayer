const rp = require('request-promise')
const server = require('../../config/server/')


module.exports = (name,obj) => {

    const o = {
        uri:server[name].uri+obj.uri
    }


    return rp( Object.assign({},server[name],obj,o) )

}


 

