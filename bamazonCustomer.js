
var mysql = require("mysql");
var inquirer = require("inquirer");

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

connection.connect(function (err) {
  if (err) throw err;
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement

    for (var i = 0; i < res.length; i++) {

      console.log("ID #: " + res[i].id +
        " || Department: " + res[i].department_name +
        " || Product: " + res[i].product_name +
        " || Availability: " + res[i].stock_quantity +
        " || Price: " + "$" + res[i].price);
    }
    console.log("----------------------------")
    ItemID();
  });
};

function ItemID() {
  inquirer
    .prompt([
      {
        name: "ID",
        type: "input",
        message: "What is the ID# of the item would you like to buy?",
        validate: function number (input){
          if (input >=1  && input <= 15){
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many of these would you like to buy?",
        validate: function number (input){
          if (input >=1  && input <= 15){
            return true;
          }
          return false;
        }
      }
    ]).then(function (answer) {
      var idNumber = answer.ID;
      var quantityNumber = answer.quantity;
      orderStatus(idNumber, quantityNumber);
    });
};

function orderStatus (ID, QU){
  connection.query("SELECT * FROM  products WHERE ID = " + ID, function (err, data){
    if (err) throw err;
    if (QU<=data[0].stock_quantity){

      var cost = data[0].price * QU;
      var newInv = data[0].stock_quantity - QU;

      console.log("Processing your order & Updating inventory..." + "\n" + QU + " " + data[0].product_name + " - "+ "Order Complete!" + "\nThe total for your is $" + cost);
      updateProduct(ID, newInv);
    }
    else if (QU > data[0].stock_quantity){
      console.log("Unfortunately, we currently only have " + data[0].stock_quantity + " " + data[0].product_name + "'s in stock!")
    }
   
      connection.end();
  })
}

function updateProduct(ID, newInv) {
  

  connection.query( "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newInv 
      },
      {
        ID: ID
      }
    ],
    function(err, res) {
      if (err) throw err;
    }
  );
}