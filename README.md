# Bamazon-MySQL

### Bamazon is a CLI aplication that displays the inventory of a virtual online store. The Online store is a set of data stored in a MySql database. When the Bamazon Application is run, it will display all of the items in the store alog with an ID number and inventory number. The user is then prompted with various questions using the inquirer NPM package, to proceed to the next step. Once the user chooses an item to purchase, the app will process the order, update the inventory and display a total. Note that if the quantity that the user wishes to purchase is greater than the available quantity, the app will let you know that the store does not have sufficient quantity to complete your oder, and will ask you how you wish to continue. This application uses various technologies including: 

* Node
* inquirer NPM 
* MySql. 
    
# Installing Bamazon 

1. Clone the Bamazon-MySQL Repo to your local computer

1. Run the command "npm install" in your terminal to install all dependencies. 

# Liri in Action 

 ## _In the Terminal_

1. node bamazonCustomer.js
     * This will display the available items in the store and all available inventory quantities for each item.

     ![GitHub Logo](/images/intro.png)

1.  What is the ID# of the item would you like to buy? & How many of these would you like to buy? 
     * Here you must enter the ID number of the item you would like to buy from the list, as well
            as how many of that specific item you would like to buy. Once You select an item it will give you a total, update the inventory, and ask you if you wish to shop again or exit.

     ![GitHub Logo](/images/intro2.png)
   
1. Insuficient inventory 
     * If the ammount you choose is greater than the amount available, the app will tell you that it cannot process 
            your request and will ask you if you wish to exit or continue shopping. 

     ![GitHub Logo](/images/shop3.png)
   