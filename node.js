const { exec } = require('child_process');
const fs = require('fs');

//read config file
let config = JSON.parse(fs.readFileSync('config.json'));

//Update DB
let tmpWpConfig = Buffer.from(fs.readFileSync(config.wp_config),'base64').toString('utf8');
tmpWpConfig = tmpWpConfig.replaceAll("\ndefine('DB_NAME'", "//define('DB_NAME'");
tmpWpConfig = tmpWpConfig.replace("//define('DB_NAME', '" + config.DB + "'", "define('DB_NAME', '" + config.DB + "'");
fs.writeFileSync(config.wp_config, tmpWpConfig);

//watch Error Log
fs.watch(config.error_log,{},function(evt, file){
    exec('code ' + config.error_log);
});