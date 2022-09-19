# wordpress-config-db-errors
Node JS script for WordPress to pick DB and watch PHP error log.

If you keep multiple DB connections in a local machine on the wp-config.php file then you can use the script to load the right one.

**PLEASE NOTE: this script can overwrite your PHP WordPress config file, make sure you backup the config file before trying this script**

## Installation
Copy `node.js` and `packages.json` onto root directory, you will need to create a config file `config.json` which will have the location to your error_log, config file and the name of the DB to switch - should like this:
```
{
    "error_log" : "<errorlog file>",
    "wp_config": "<wp-config.php config file>",
    "DB": "<db name>"
}
```
Once ready run:
```
npm start
```