const url = "http://localhost:3000";

const allGamesButton = document.querySelector("#allGames");
const gameDisplayArea = document.querySelector("#gameDisplay");
allGamesButton.addEventListener("click", displayAllGames);

async function displayAllGames() {
  const response = await fetch(`${url}/games`);
  const payload = await response.json();
  const data = payload.data;

  while (gameDisplayArea.firstChild) {
    gameDisplayArea.removeChild(gameDisplayArea.firstChild);
  }

  data.map((game) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${game.title} / ${game.developer} / ${game.releasedate}`;
    gameDisplayArea.appendChild(listItem);
  });
}
