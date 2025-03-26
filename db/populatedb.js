const pool = require("./pool");

const { Client } = require("pg");

const { argv } = require('node:process');

// query functions go here for CRUD on the tables 


const DefaultSQL = `


CREATE TABLE IF NOT EXISTS directors (
  director_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )

);

CREATE TABLE IF NOT EXISTS genres (
  genre_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  genre VARCHAR ( 255 )

);

CREATE TABLE IF NOT EXISTS titles (
  titles_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  director_id INTEGER,
  genre_id INTEGER,
  FOREIGN KEY (director_id) REFERENCES directors (director_id),
  FOREIGN KEY (genre_id) REFERENCES genres (genre_id)

);


INSERT INTO directors (name) VALUES
  ('Lana Wachowski'),
  ('Christopher Nolan'),
  ('Francis Ford Coppola'),
  ('Steven Spielberg');

INSERT INTO genres (genre) VALUES
  ('Sci-Fi'),
  ('Action'),
  ('Drama'),
  ('Adventure');

INSERT INTO titles (title, director_id, genre_id) VALUES
  ('The Matrix', 1, 1),
  ('Inception', 2, 2),
  ('The Godfather', 3, 3),
  ('Jurassic Park', 4, 4),
  ('Interstellar', 2, 1),
  ('The Dark Knight', 2, 2);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2] || process.env.DATABASE_URL,
    
  });
  
  await client.connect();
  await client.query(DefaultSQL);
  await client.end();
  console.log("done");
}

main();
