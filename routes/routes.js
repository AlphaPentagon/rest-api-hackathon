import express from "express";
export const router = express.Router();
import {
    getGames,
    getGameById,
    searchGameByTitle,
    createGame,
    updateGameById,
    deleteGameById,
} from "../models/models.js";

// if the req.query.search param is not empty e.g. ?title=mass
// searchGameByTitle
// else
// getGames()

router.get("/", async function (req, res) {
    const searchTerm = req.query.title;
    if (searchTerm !== undefined) {
        // create router to get game by search title        
        const searchedGame = await searchGameByTitle(searchTerm);
        const responseObject = {
            success: true,
            message: "Games matching your search term",
            data: searchedGame,
        };
        res.json(responseObject);
    } else {
        console.log(req.query.search);
        const allGames = await getGames();
        const responseObject = {
            success: true,
            message: "All games",
            data: allGames,
        };
        res.json(responseObject);
    };
});

router.get("/:id", async function (req, res) {
    const game = await getGameById(req.params.id);
    const responseObject = {
        success: true,
        message: "Here is your game",
        data: game,
    };
    res.json(responseObject);
});

router.post("/", async function (req, res) {
    const newGame = await createGame(req.body)
    const responseObject = {
        success: true,
        message: "New game added",
        data: newGame
    };
    res.json(responseObject);
})

router.put("/:id", async function (req, res) {
    const updatedGame = await updateGameById(req.params.id, req.body);
    const responseObject = {
        success: true,
        message: "Update successful",
        data: updatedGame
    }
    res.json(responseObject);
}) 