const url = "localhost:3000";

const allGamesButton = document.querySelector("#allGames")
const gameDisplayArea = document.querySelector("#gameDisplay")
allGamesButton.addEventListener('click', displayAllGames)

async function displayAllGames() {
    const response = await fetch(`${url}/games`);
    console.log(response);
    const payload = await response.json();
    const data = payload.data
    gameDisplayArea.innerTEXT = data;
}