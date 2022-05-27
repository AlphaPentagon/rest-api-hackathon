import { pool } from "../db/index.js";

export async function getGames() {
    const res = await pool.query(
        `SELECT * FROM games;`
    )
    return res.rows;
}

export async function getGameById(id) {
    const res = await pool.query(
        `SELECT * FROM games WHERE game_id = $1;`,
        [id]
    )
    return res.rows;
}

export async function searchGameByTitle(searchTerm) {
    const res = await pool.query(
        `SELECT * FROM games WHERE LOWER(title) LIKE LOWER('%' || $1 || '%');`,
        [searchTerm]);
    return res.rows;

}



export async function createGame(newGame) {
    const res = await pool.query(
        `INSERT INTO games (title, releaseDate, developer, avgCompletion) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [newGame.title, newGame.releaseDate, newGame.developer, newGame.avgCompletion]
    );
    return res.rows;
}

export async function updateGameById(id, updatedGame) {
    const res = await pool.query(
        `UPDATE games SET 
            title = $1,
            releaseDate = $2,
            developer = $3,
            avgCompletion = $4
        WHERE game_id = $5 RETURNING *;`,
        [updatedGame.title, updatedGame.releaseDate, updatedGame.developer, updatedGame.avgCompletion, id]
    );
    return res.rows;
}

export async function deleteGameById(id) {
    const res = await pool.query(
        `DELETE FROM games WHERE game_id = $1 RETURNING *;`,
        [id]
    );
    return res.rows;
}