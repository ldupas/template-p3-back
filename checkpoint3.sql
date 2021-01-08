CREATE DATABASE checkpoint3;
USE checkpoint3;
CREATE TABLE album (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    title VARCHAR(255),
    genre VARCHAR(255),
    picture VARCHAR(255),
    artist VARCHAR(255)
);
CREATE TABLE track (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(128),
    youtube_url VARCHAR(255),
    album_id int NOT NULL, 
    FOREIGN KEY(album_id) REFERENCES album(id)
);