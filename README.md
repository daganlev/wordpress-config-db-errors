# wordpress-config-db-errors
Node JS script for WordPress to pick DB and watch PHP error log - this will open the error log file in Visual Studio Code if the file changes (i.e. new PHP errors happen)

If you keep multiple DB connections in a local machine on the wp-config.php file then you can use the script to load the right one.

So, your wp-config.php DB section might look like this:
```
define('DB_NAME', 'dbname1');
//define('DB_NAME', 'dbname2');
//define('DB_NAME', 'dbname3');
```

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