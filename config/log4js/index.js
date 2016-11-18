


module.exports = {
    "appenders":[
        {"type":"console"},
        {"type":"dateFile","filename":"logs/access/access.log","pattern": "-yyyy-MM-dd-.log","alwaysIncludePattern":true,"maxLogSize":20480,"category":"access"},
        {"type":"dateFile","filename":"logs/db/db.log","pattern": "-yyyy-MM-dd-.log","alwaysIncludePattern":true,"maxLogSize":20480,"category":"db"}
    ],
    "replaceConsole": true
}


