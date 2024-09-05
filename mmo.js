let games;

async function renderGames(searchQuery = ""){
    const gamesWrapper = document.querySelector(".games");


    gamesWrapper.innerHTML = '<i class="fas fa-spinner games__loading"></i>';

    if (!games) {
      try {
        games = await getGames();
      } catch (error) {
        console.error("Error fetching games:", error);
        gamesWrapper.innerHTML =
          "<p>Error loading games. Please try again later.</p>";
        return;
      }
    }

   

   



    let filteredGames = games;


    if (searchQuery) {
        filteredGames = games.filter(game =>
            game.title.toLowerCase().includes(searchQuery)
        );
    }


const gamesHtml = filteredGames.map((game) =>{
    return ` <div class="game">
    <figure class="game__img--wrapper">
      <img class="game__img" src="${game.thumbnail}" alt="${game.title}">
    </figure>
    <div class="game__title">
      ${game.title}
    </div>
  </div>`;
  
}).join("")
 gamesWrapper.innerHTML = gamesHtml;

}
document.addEventListener('DOMContentLoaded', () =>{

document.getElementById('searchInput').addEventListener('input',(event) =>{
    const searchQuery = event.target.value.toLowerCase();
    renderGames(searchQuery)
})


 renderGames();
})
// FAKE DATA
function getGames() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://www.mmobomb.com/api1/games";
  
    return fetch(proxyUrl + apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        return data; // Return the game data
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // Example usage:
  getGames().then((games) => {
    console.log(games);
  });