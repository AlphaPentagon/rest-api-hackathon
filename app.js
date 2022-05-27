import express from "express";
import { router } from "./routes/routes.js";
const app = express();
const PORT = process.env.port || 3000;

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.use("/games", router);

// PLAN:
// - Decide on hackathon database idea ✅
//     - Video games✅
// - Decide on specific data for idea✅
//   - What columns to include✅
//   - How many rows (10)✅
//   - Types of data for each column:✅
//     - id (INT PRIMARY KEY), title (TEXT), release date (DATE (yyyy-mm-dd)), developer (TEXT), average completion time (INT)✅

// - Create a database on Heroku✅

//   - Create .env file with credentials✅
//   - Create a scripts folder✅
//     - Create a table ✅
//       - id (INT PRIMARY KEY), title (TEXT), release date (DATE (yyyy-mm-dd)), developer (TEXT), average completion time (INT)✅

//     - Populate table script
//        -Create db data ✅
//        - export as JSON ✅
//        - creat libs folder, create games file, copy json array ✅
//        - use our pool.query to insert games data✅
//          - loop over each element of the array and then do the above✅
//          - console.log for testing✅
//     - Drop table script✅
//   - Connect db to Heroku✅
//     - Create a new app on Heroku✅
//     - Create a .env file and paste credentials into the file - add file to .gitignore✅
//     - Test connection to database (SELECT NOW())✅

//   - Create models for CRUD operations
//      getGames, - GET✅
//     getGameById, GET✅
//     searchGameByTitle, GET✅
//     createGame, POST
//      updateGameById, PUT
//      deleteGameById, DELETE


//   - Create routes to interact with models
//      getGames, - GET✅
//     getGameById, GET✅
//     searchGameByTitle, GET✅
//     createGame, POST
//      updateGameById, PUT
//      deleteGameById, DELETE
