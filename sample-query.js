// https://www.npmjs.com/package/mysql-promise
var db = require('mysql-promise')();

// In real life, we'd move this to an environment-based config file
db.configure({
	"host": "localhost",
	"user": "root",
	"password": "int3grity",
	"database": "menu"
});

db.query("SELECT * FROM things")
  .spread(function(rows) {
    console.log("rows", rows);

    // This is just for exiting the script when you
    // run this from the command line
    process.exit();
  })
  // Catches any DB connection errors.
  // Comment this section out to see the difference.
  .catch(function(e){
    console.log(e);
  });
