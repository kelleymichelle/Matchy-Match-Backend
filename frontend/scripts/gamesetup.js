// game- gameid, playerid, playername
// gametiles- array with each tile instance
const tileBox = document.getElementById("tile-box");

class Game {
  constructor(playerName, playerId, gameId) {
    this.playerName = playerName;
    this.playerId = playerId;
    this.gameId = gameId;
    // this.gameTimer = 0
  }
}

class Tile {
  constructor(id, front, back) {
    this.id = id;
    this.front = front;
    this.back = back;
  }
  
}

function renderGame() {
  console.log(game);
  console.log(gameTiles);
  tileBox.innerHTML = "";
  renderInfoBar();
  tileProcessor();
  renderTiles();
  listenTiles();
}

function renderInfoBar() {
  const nabber = document.getElementById("nabber");
  const navbar = `
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div><h1>mAtChY-mAtCh</h1></div>
    
  </nav>
  `;
  nabber.innerHTML = navbar;
}

let processedTiles;

const tileBackCats = [
  "images/cats/baby-cat.jpg",
  "images/cats/baseball-cat.jpeg",
  "images/cats/bear-cat.jpg",
  "images/cats/cat-in-hat.jpg",
  "images/cats/dob-1.jpg",
  "images/cats/rainbow-kitties.jpg",
  "images/cats/glamor-kitty.jpg",
  "images/cats/savannah.jpeg",
  "images/cats/orange.jpg", 
  "images/cats/shybk.jpg", 
  "images/cats/sleepy-kitty.jpg",
  "images/cats/stalker.jpg",
  "images/cats/teacupkitty.jpg",
  "images/cats/winking-kitty.jpg",
  "images/cats/wow-stripe.jpg",
  "images/cats/blackkitty.jpg"]

  // let shuffledCats = (tileBackCats) => shuffle(tileBackCats)

function tileProcessor() {
  let num = 0
  processedTiles = gameTiles.map(t => {
    t.front = `<div class="flip-card-front rounded" tileid="${t.id}">
  </div>`
    t.back = `<div class="flip-card-back rounded" tileid="${t.id}">
    <img src="${tileBackCats[num]}">
  </div>`
    num = ++num
    
    return t; 
  });
}

function renderTiles() {
  let clonedTiles = [...processedTiles];
  clonedTiles = clonedTiles.concat(processedTiles);

  shuffle(clonedTiles).map(t => {
    const thisTile = `
    <div class="flip-card thumbnail">
  <div class="flip-card-inner rounded">
    ${t.front}
    ${t.back}
  </div>
</div>
    `
    tileBox.innerHTML += thisTile;
  });
}

// function flip() {
//   $('.flip-card-inner').toggleClass('flipped');
// }

function flip() {
  $('.flip-card-inner').toggleClass('flipped');
}



function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  return array;
}
