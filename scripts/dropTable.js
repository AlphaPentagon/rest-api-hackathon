import { pool } from "../db/index.js"

async function dropTable() {
    const res = await pool.query(
        `DROP TABLE IF EXISTS games;`
    );
    console.log(res.command)
};

dropTable()