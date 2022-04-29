CREATE DATABASE projet2;

USE projet2;

CREATE TABLE hero (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    picture VARCHAR(255),
    speed INT NOT NULL,
    strength INT NOT NULL,
    stamina INT NOT NULL,
    gender VARCHAR(100) NOT NULL,
    race VARCHAR(100) NOT NULL,
    price INT NOT NULL
);

INSERT INTO hero (name, picture, speed, strength, stamina, gender, race, price)
VALUES
('Ant-Man','https://zupimages.net/up/20/46/9sjo.png', 23, 42, 81, 'Male', 'Human',32);

