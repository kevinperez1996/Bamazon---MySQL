
var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    readProducts();
  });

  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement

      for (var i = 0; i<res.length; i++){
            
          console.log("ID #: " + res[i].id + 
          " || Department: " + res[i].department_name + 
          " || Product: " + res[i].product_name + 
          " || Availability: " + res[i].stock_quantity + 
          " || Price: " + "$" + res[i].price);
        }
        connection.end();
    });
  };