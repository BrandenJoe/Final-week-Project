document.addEventListener("DOMContentLoaded", function () {
  let games;
  const gamesWrapper = document.querySelector(".games");

  // Show loading spinner
  gamesWrapper.innerHTML = '<i class="fas fa-spinner games__loading"></i>';

  let gameData = [];
  let sortedGameData = [];

  // Event listener for search input
  const input = document
    .getElementById("searchInput")
    .addEventListener("input", searchEvent);

  function searchEvent(event) {
    const searchValue = event.target.value;

    // Show all games if search input is empty
    if (searchValue === "") {
      renderGames(gameData);
      return;
    }

    // Flexible search for partial matches (case insensitive)
    sortedGameData = gameData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Render filtered games
    renderGames(sortedGameData);
  }

  // Function to render games
  function renderGames(games) {
    if (games.length > 0) {
      gamesWrapper.innerHTML = games
        .map((game) => {
          return ` 
            <div class="game">
              <figure class="game__img--wrapper">
                <img class="game__img" src="${game.thumbnail}" alt="${game.title}">
              </figure>
              <div class="game__title">
                ${game.title}
              </div>
            </div>`;
        })
        .join("");
    } else {
      gamesWrapper.innerHTML = "<p>No games found</p>";
    }
  }

  // Fetch game data from API
  async function getGames() {
    try {
      const response = await fetch("https://mmo-games.p.rapidapi.com/games", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-rapidapi-ua": "RapidAPI-Playground",
          "x-rapidapi-key": "cea8761024msh8b61fb9d9d086aep1cd5bajsnb6c064ef30c3",
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        },
      });
      const data = await response.json();
      gameData = data;

      // Initially render all games
      renderGames(gameData);
    } catch (error) {
      console.error("Failed to fetch games:", error);
      gamesWrapper.innerHTML = "<p>Failed to load games.</p>";
    }
  }

  // Start fetching games
  getGames();
});