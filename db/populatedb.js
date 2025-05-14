require('dotenv').config();

const { Client } = require("pg");


const { argv } = require("node:process");

// script here to insert dummy data upon deployment

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
  year INTEGER,
  description VARCHAR ( 1001 ),
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

INSERT INTO titles (title, year, director_id, genre_id, description) VALUES
  ('The Matrix', 1999, 1, 1, 'A groundbreaking sci‑fi action film written and directed by the Wachowskis, it stars Keanu Reeves as Neo, a hacker who learns that reality is a simulated world run by machines. What begins as an exhilarating cyber‑punk adventure unfolds into a philosophical battle to free humanity from its digital prison.'),
  ('Inception', 2010, 2, 2, 'A high‑concept heist thriller follows Dom Cobb (Leonardo DiCaprio), a “dream thief” hired to perform inception—implanting an idea into a target’s subconscious. As Cobb’s team plunges through layered dreamscapes, the film explores memory, guilt, and the thin line between reality and illusion.'),
  ('The Godfather', 1972, 3, 3, 'Epic gangster saga chronicles the Corleone family, led by patriarch Vito Corleone (Marlon Brando). When Vito’s youngest son, Michael (Al Pacino), reluctantly steps in, he transforms from war hero to ruthless mafia boss in a masterful study of power, loyalty, and the American dream’s dark underbelly.'),
  ('Jurassic Park', 1993, 4, 4, 'Spielberg brings Michael Crichton’s novel to life in this sci‑fi action classic. On Isla Nublar near Costa Rica, billionaire John Hammond’s dinosaur theme park descends into chaos after sabotage shuts down its security systems, forcing paleontologists and visitors to fight for survival against roaming prehistoric predators.'),
  ('Interstellar', 2017, 2, 1, 'Earth is dying from blight and famine. A team of astronauts, led by former pilot Cooper (Matthew McConaughey), journeys through a wormhole near Saturn to find a new home for humanity—testing the limits of love, time, and sacrifice across the cosmos.'),
  ('The Dark Knight', 2008, 2, 2, 'Nolan’s gritty sequel to Batman Begins unites Batman (Christian Bale), Lt. James Gordon (Gary Oldman), and District Attorney Harvey Dent (Aaron Eckhart) to take down Gotham’s organized crime—only to face the Joker (Heath Ledger), an anarchic mastermind who forces Batman to confront the true meaning of justice and order.');
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
