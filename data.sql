CREATE DATABASE projet2;

USE projet2;

CREATE TABLE animal (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    species VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    description TEXT,
    picture VARCHAR(255)
);

INSERT INTO animal (name, species, age, description, picture)
VALUES
('Simba', 'Lion', 8, 'I am a lion, roar!', 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-03/mini/lion-072746-650-400.jpg');

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description TEXT,
    picture VARCHAR(255)
);

INSERT INTO product (name, price, description, picture)
VALUES
('Chocolate', 12, 'Great chocolate from Belgium', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chocolate_Alternative1.jpg/800px-Chocolate_Alternative1.jpg');

