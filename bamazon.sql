
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
VALUES ("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10),
("vanilla", "Chock", 100.00, 10);