import { pool } from "../db/index.js"

async function createTable() {
    const res = await pool.query(
        `CREATE TABLE IF NOT EXISTS games (
            game_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            title Text,
            releaseDate DATE,
            developer Text,
            avgCompletion INT
        );`
    );
    console.log(res.command)
};

createTable()