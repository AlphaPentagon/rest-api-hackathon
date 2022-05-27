import express from "express";
export const router = express.Router();
import { getGames, getGameById, getGameByTitle, createGame, updateGameById, deleteGameById } from "../models/models.js"

router.get("/", async function (req, res) {
    const allGames = await getGames()
    const responseObject = {
        success: true,
        message: "All games",
        data: allGames
    }
    res.json(responseObject)
})

router.get("/:id", async function (req, res) {
    const game = await getGameById(req.params.id)
    const responseObject = {
        success: true,
        message: "Here is your game",
        data: game
    }
    res.json(responseObject)
})