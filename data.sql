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

