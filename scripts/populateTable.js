import { pool } from '../db/index.js';

import { games } from '../libs/video_games.js';

async function populateTable() {
    for (let i =0; i<games.length; i++) {
        const res = await pool.query(
            'INSERT INTO games (title, releaseDate, developer, avgCompletion) VALUES ($1, $2, $3, $4) RETURNING *;',
            [games[i].title, games[i].release_date, games[i].developer, games[i].avg_completion_time]
        )
        console.log(res.rows[0].title, "inserted");
    }
}

populateTable();