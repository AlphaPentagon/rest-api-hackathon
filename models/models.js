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



export function createGame() { }

export function updateGameById() { }

export function deleteGameById() { }