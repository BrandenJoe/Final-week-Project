document.addEventListener("DOMContentLoaded", function () {
  let gameData = [];
  let filteredData = [];
  const gamesWrapper = document.querySelector(".games");

  // Show loading spinner
  gamesWrapper.innerHTML = '<i class="fas fa-spinner games__loading"></i>';

  // Event listener for search input
  document.getElementById("searchInput").addEventListener("input", searchEvent);

  // Event listener for filter dropdown
  document.getElementById("filter").addEventListener("change", filterGames);

  // Function to handle search input
  function searchEvent(event) {
    const searchValue = event.target.value;

    // Filter based on search query (case-insensitive)
    filteredData = gameData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Apply filter after searching
    applyFilter();
  }

  // Function to handle sorting filter
  function filterGames() {
    applyFilter();
  }

  // Function to apply the search and filter logic
  function applyFilter() {
    let filteredGames = [...filteredData];

    // Apply alphabetical filter based on dropdown selection
    const selectedFilter = document.getElementById("filter").value;
    if (selectedFilter === "A_TO_Z") {
      filteredGames.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedFilter === "Z_TO_A") {
      filteredGames.sort((a, b) => b.title.localeCompare(a.title));
    }

    // Render the filtered games
    renderGames(filteredGames);
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
              <div class="game__title">${game.title}</div>
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
      filteredData = [...gameData]; // Clone data to allow filtering

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