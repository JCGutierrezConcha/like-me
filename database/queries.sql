CREATE DATABASE LIKEME;

DROP TABLE IF EXISTS POSTS;

CREATE TABLE POSTS (
	id SERIAL, 
	usuario VARCHAR(25),
	url VARCHAR(1000),
	descripcion VARCHAR(255),
	likes INT
);