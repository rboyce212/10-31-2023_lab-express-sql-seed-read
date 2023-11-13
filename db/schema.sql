DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 year INT,
 genre TEXT,
 is_favorite BOOLEAN DEFAULT false
);
