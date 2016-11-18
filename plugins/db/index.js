

const conf = require('../../config/')


const mongoose = require('mongoose')

const db = mongoose.createConnection(conf.mongodb.host,conf.mongodb.dbname)
 
console.log(conf)




module.exports = db;