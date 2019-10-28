
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db; 

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(5,2) NULL,
    stock_quantity INT default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone 11", "Tech", 850.99, 10),
("Samsung Galaxy", "Tech", 730.00, 9),
("Xbox one X", "Tech", 400.00, 12),
("LG 4k TV", "Tech", 1950.50, 6),
("Macbook Pro", "Tech", 1400.00, 13),
("The Office T-Shirt", "Clothing", 19.99, 10),
("Addidas Sweatshirt", "Clothing", 49.95, 9),
("Levi's Jeans", "Clothing", 59.00, 16),
("NorthFace Jacket", "Clothing", 150.30, 5),
("Polo Hat", "Clothing", 40.00, 3),
("Yeezy Boost 350", "Shoes", 200.00, 2),
("Timberland Boots", "Shoes", 100.00, 10),
("Nike Arimax 95", "Shoes", 180.00, 5),
("Vans clasics", "Shoes", 90.50, 10),
("Ugg Boots", "Shoes", 120.00, 1);