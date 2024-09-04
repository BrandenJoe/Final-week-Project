let games;

async function renderGames(searchQuery = ""){
    const gamesWrapper = document.querySelector(".games");



    gamesWrapper.classList += ' games__loading'
  if(!games){
 games = await getGames();
    }
    gamesWrapper.classList.remove('games__loading')


   

   



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
  return new Promise((resolve) =>{
setTimeout(() =>{
resolve([
    {
        id: 1136,
        title: "Overwatch 2",
        thumbnail: "https://www.mmobomb.com/g/1136/thumbnail.jpg",
        shortDescription: "Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.",
        gameUrl: "https://www.mmobomb.com/open/overwatch-2",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Activision Blizzard King",
        developer: "Blizzard Entertainment",
        release_date: "2022-10-04",
        profile_url: "https://www.mmobomb.com/overwatch-2"
    },
    {
        "id": 523,
        "title": "Lost Ark",
        "thumbnail": "https://www.mmobomb.com/g/523/thumbnail.jpg",
        "short_description": "Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate's free-to-play ARPG Lost Ark!",
        "game_url": "https://www.mmobomb.com/open/lost-ark",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "publisher": "Amazon Games",
        "developer": "Smilegate",
        "release_date": "2022-02-11",
        "profile_url": "https://www.mmobomb.com/lost-ark"
    },
    {
        "id": 1113,
        "title": "PUBG: BATTLEGROUNDS",
        "thumbnail": "https://www.mmobomb.com/g/1113/thumbnail.jpg",
        "short_description": "Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play battle royale experience.",
        "game_url": "https://www.mmobomb.com/open/pubg",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "KRAFTON, Inc.",
        "developer": "KRAFTON, Inc.",
        "release_date": "2022-01-12",
        "profile_url": "https://www.mmobomb.com/pubg"
    },
    {
        "id": 508,
        "title": "Enlisted",
        "thumbnail": "https://www.mmobomb.com/g/508/thumbnail.jpg",
        "short_description": "Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from the makers of War Thunder. Experience squad-based combat from the ground level, as you command your troops, outfitted with era-authentic weapons and gear, in massive battles with over a hundred soldiers apiece.",
        "game_url": "https://www.mmobomb.com/open/enlisted",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Gaijin Entertainment",
        "developer": "Darkflow Software",
        "release_date": "2021-04-08",
        "profile_url": "https://www.mmobomb.com/enlisted"
    },
    {
        "id": 1120,
        "title": "Fall Guys",
        "thumbnail": "https://www.mmobomb.com/g/1120/thumbnail.jpg",
        "short_description": "Fall Guys is a free-to-play massively multiplayer party royale game.",
        "game_url": "https://www.mmobomb.com/open/fall-guys",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "publisher": "Mediatonic",
        "developer": "Mediatonic",
        "release_date": "2020-08-04",
        "profile_url": "https://www.mmobomb.com/fall-guys"
    },
    {
        "id": 340,
        "title": "Game Of Thrones Winter Is Coming",
        "thumbnail": "https://www.mmobomb.com/g/340/thumbnail.jpg",
        "short_description": "Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially licensed free-to-play browser game based on the epic fantasy series by George R.R. Martin.",
        "game_url": "https://www.mmobomb.com/open/game-of-thrones-winter-is-coming",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "GTArcade",
        "developer": "YOOZOO Games ",
        "release_date": "2019-11-14",
        "profile_url": "https://www.mmobomb.com/game-of-thrones-winter-is-coming"
    },
    {
        "id": 380,
        "title": "Dark Orbit Reloaded",
        "thumbnail": "https://www.mmobomb.com/g/380/thumbnail.jpg",
        "short_description": "Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the free-to-play browser-based space combat MMO from Bigpoint -- now in 3-D! Choose your faction and your ship, each with their own strengths, and take off into adventure!",
        "game_url": "https://www.mmobomb.com/open/darkorbit",
        "genre": "Shooter",
        "platform": "Web Browser",
        "publisher": "Bigpoint",
        "developer": "Bigpoint",
        "release_date": "2006-12-11",
        "profile_url": "https://www.mmobomb.com/darkorbit"
    },
    {
        "id": 5,
        "title": "Crossout",
        "thumbnail": "https://www.mmobomb.com/g/5/thumbnail.jpg",
        "short_description": "Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the free-to-play vehicular combat game from Gaijin Entertainment! Featuring a vehicle design system with endless customization and fast-paced, armor-crunching combat, Crossout offers high-octane excitement in brief and explosive matches.",
        "game_url": "https://www.mmobomb.com/open/crossout",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Targem",
        "developer": "Gaijin",
        "release_date": "2017-05-30",
        "profile_url": "https://www.mmobomb.com/crossout"
    },
    {
        "id": 347,
        "title": "Elvenar",
        "thumbnail": "https://www.mmobomb.com/g/347/thumbnail.jpg",
        "short_description": "In InnoGames' Elvenar, you can build an epic fantasy city, populated by elves or humans, and watch it grow into a sprawling metropolis, awash in riches and brimming with military might. The elves have powerful magic at their disposal, while humans are well-versed in the arts of war.",
        "game_url": "https://www.mmobomb.com/open/elvenar",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "InnoGames",
        "developer": "InnoGames",
        "release_date": "2015-04-08",
        "profile_url": "https://www.mmobomb.com/elvenar"
    },
    {
        "id": 11,
        "title": "Neverwinter",
        "thumbnail": "https://www.mmobomb.com/g/11/thumbnail.jpg",
        "short_description": "Neverwinter is an action MMORPG based on the acclaimed Dungeons and Dragons universe. In Neverwinter you take on the role as a mighty hero who must set out to protect the lands of Neverwinter from those who conspire to see it destroyed.",
        "game_url": "https://www.mmobomb.com/open/neverwinter",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Perfect World Entertainment",
        "developer": "Cryptic Studios",
        "release_date": "2013-12-06",
        "profile_url": "https://www.mmobomb.com/neverwinter"
    },
    {
        "id": 345,
        "title": "Forge of Empires",
        "thumbnail": "https://www.mmobomb.com/g/345/thumbnail.jpg",
        "short_description": "Forge of Empires is a browser-based MMORTS by InnoGames. Relive history as you rule over your empire through the stages of early human civilizations.",
        "game_url": "https://www.mmobomb.com/open/forge-of-empires",
        "genre": "Strategy",
        "platform": "Web Browser",
        "publisher": "InnoGames",
        "developer": "InnoGames",
        "release_date": "2012-04-17",
        "profile_url": "https://www.mmobomb.com/forge-of-empires"
    },
    {
        "id": 2,
        "title": "World of Tanks",
        "thumbnail": "https://www.mmobomb.com/g/2/thumbnail.jpg",
        "short_description": "World of Tanks is a team-based free MMO action game exclusively focused on the armored warfare in the mid-20th century. Created by the strategy masterminds at Wargaming.net, this is a shooter with a lot of tactical elements to be taken into consideration.",
        "game_url": "https://www.mmobomb.com/open/world-of-tanks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2011-04-12",
        "profile_url": "https://www.mmobomb.com/world-of-tanks"
    },
    {
        "id": 1181,
        "title": "Tarisland",
        "thumbnail": "https://www.mmobomb.com/g/1181/thumbnail.jpg",
        "short_description": "If you're looking for an MMORPG that sticks to the tried-and-true structure, Tarisland may be worth checking out.",
        "game_url": "https://www.mmobomb.com/open/tarisland",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Tencent",
        "developer": "Level Infinite",
        "release_date": "2024-06-21",
        "profile_url": "https://www.mmobomb.com/tarisland"
    },
    {
        "id": 1118,
        "title": "Diablo Immortal",
        "thumbnail": "https://www.mmobomb.com/g/1118/thumbnail.jpg",
        "short_description": "Diablo Immortal is an all-new massively multiplayer online action RPG and Blizzard’s long advertised mobile Diablo experience (that totally was not coming to PC) comes to PC complete with all the demon slaying and looting you could want.",
        "game_url": "https://www.mmobomb.com/open/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-06-02",
        "profile_url": "https://www.mmobomb.com/diablo-immortal"
    },
    {
        "id": 1180,
        "title": "XDefiant",
        "thumbnail": "https://www.mmobomb.com/g/1180/thumbnail.jpg",
        "short_description": "Ubisoft enters the arena shooter space with a free-to-pay 6v6 first-person competition.",
        "game_url": "https://www.mmobomb.com/open/xdefiant",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Ubisoft",
        "developer": "Ubisoft",
        "release_date": "2024-05-21",
        "profile_url": "https://www.mmobomb.com/xdefiant"
    }
])



}, 1000)



  })
}

