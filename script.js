const board = document.getElementById('board');

// Lista de casillas en orden
/*
  Explicación de los campos:
  - type: Tipo de casilla (e.g., 'corner', 'property', 'community', 'tax', 'railroad', 'lucky', 'utility')
  - text: Texto que se mostrará en la casilla
  - position: Posición de la casilla en el tablero usando el formato 'fila / columna'
*/
const cells = [
  { type: 'corner', text: 'SALIDA', position: '11 / 11', class: 'SALIDA' },
  { type: 'property', text: 'Aula SMX-A', position: '11 / 10' },
  { type: 'community', text: 'Caja de Comunidad', position: '11 / 9' },
  { type: 'property', text: 'Aula SMX-B', position: '11 / 8' },
  { type: 'tax', text: '', position: '11 / 7', class: 'soborno-javi' },
  { type: 'railroad', text: 'Ferrocarril', position: '11 / 6' },
  { type: 'property', text: 'Aula-DAM', position: '11 / 5' },
  { type: 'lucky', text: '', position: '11 / 4' },
  { type: 'property', text: 'Aula-ASIX', position: '11 / 3' },
  { type: 'property', text: 'Despacho Paco', position: '11 / 2' },
  { type: 'corner', text: '', position: '11 / 1', class: 'CÁRCEL' },
  // Lado izquierdo
  { type: 'property', text: 'Aula-GEAD', position: '10 / 1' },
  { type: 'utility', text: 'Compañía Eléctrica', position: '9 / 1' },
  { type: 'property', text: 'Secretaria', position: '8 / 1' },
  { type: 'property', text: 'Casa de Roberto', position: '7 / 1' },
  { type: 'railroad', text: 'Ferrocaril', position: '6 / 1' },
  { type: 'property', text: '1r ESO', position: '5 / 1' },
  { type: 'community', text: 'Caja de Comunidad', position: '4 / 1' },
  { type: 'property', text: '2nd ESO', position: '3 / 1' },
  { type: 'property', text: '3r ESO', position: '2 / 1' },
  { type: 'corner', text: '', position: '1 / 1', class: 'PARKING' },
  // Lado superior
  { type: 'property', text: '4t ESO', position: '1 / 2' },
  { type: 'lucky', text: '', position: '1 / 3' },
  { type: 'property', text: 'Despacho Amador', position: '1 / 4' },
  { type: 'property', text: '1r Bachillerato', position: '1 / 5' },
  { type: 'railroad', text: 'Ferrocarril', position: '1 / 6' },
  { type: 'property', text: '2nd Bachillerato', position: '1 / 7' },
  { type: 'property', text: 'Aula-MIPA-A', position: '1 / 8' },
  { type: 'utility', text: 'Compañía de Agua', position: '1 / 9' },
  { type: 'property', text: 'Aula-MIPA-B', position: '1 / 10' },
  { type: 'corner', text: '', position: '1 / 11', class: 'IR_A_LA_CÁRCEL' },
  // Lado derecho
  { type: 'property', text: 'Aula-DAW', position: '2 / 11' },
  { type: 'property', text: 'Despacho Director', position: '3 / 11' },
  { type: 'community', text: 'Caja de Comunidad', position: '4 / 11' },
  { type: 'property', text: 'Monlau Maquinista', position: '5 / 11' },
  { type: 'railroad', text: 'Ferrocarril', position: '6 / 11' },
  { type: 'lucky', text: '', position: '7 / 11' },
  { type: 'property', text: 'Calle Monlau', position: '8 / 11' },
  { type: 'tax', text: '', position: '9 / 11', class: 'examen-roberto' },
  { type: 'property', text: 'Casa de Javier Salvador', position: '10 / 11' },
];

const propertyColors = [
  'brown', 'brown', // 2 brown
  'lightblue', 'lightblue', 'lightblue', // 3 light blue
  'pink', 'pink', 'pink', // 3 pink
  'orange', 'orange', 'orange', // 3 orange
  'red', 'red', 'red', // 3 red
  'yellow', 'yellow', 'yellow', // 3 yellow
  'green', 'green', 'green', // 3 green
  'darkblue', 'darkblue' // 2 dark blue
];

// Crear casillas en posiciones específicas
cells.forEach((cell, index) => {
  const cellDiv = document.createElement('div');
  cellDiv.classList.add('cell', cell.type);
  if (cell.type === 'property') {
    const colorClass = propertyColors.shift();
    cellDiv.classList.add(colorClass);
    cell.colorClass = colorClass; // Guardar la clase de color en el objeto cell
  }
  if (cell.class) {
    cellDiv.classList.add(cell.class);
  }
  if (cell.type !== 'community' && cell.type !== 'chance') {
    cellDiv.textContent = cell.text;
  }
  cellDiv.style.gridArea = cell.position;
  board.appendChild(cellDiv);
});

// Añadir logo en el centro del tablero
const logoDiv = document.createElement('img');
logoDiv.id = 'logo';
logoDiv.src = '../images/logo.png';
board.appendChild(logoDiv);

// Añadir contenedor de cartas de Suerte
const chanceCardsDiv = document.createElement('div');
chanceCardsDiv.id = 'chance-cards';
chanceCardsDiv.classList.add('card-container');
const chanceImg = document.createElement('img');
chanceImg.src = '../images/suerte.png';
chanceImg.alt = 'Cartas de Suerte';
chanceCardsDiv.appendChild(chanceImg);
board.appendChild(chanceCardsDiv);

// Añadir contenedor de cartas de Comunidad
const communityCardsDiv = document.createElement('div');
communityCardsDiv.id = 'community-cards';
communityCardsDiv.classList.add('card-container');
const communityImg = document.createElement('img');
communityImg.src = '../images/caja_comunidad.png';
communityImg.alt = 'Cartas de Comunidad';
communityCardsDiv.appendChild(communityImg);
board.appendChild(communityCardsDiv);

// Añadir contenedor de listado de propiedades
const propertiesListDiv = document.createElement('div');
propertiesListDiv.id = 'properties-list';
propertiesListDiv.classList.add('properties-list');
document.body.appendChild(propertiesListDiv);

// Añadir propiedades al listado
const propertiesTitle = document.createElement('h2');
propertiesTitle.textContent = 'Listado de Propiedades';
propertiesListDiv.appendChild(propertiesTitle);

cells.forEach((cell, index) => {
  if (cell.type === 'property') {
    const propertyItem = document.createElement('div');
    propertyItem.classList.add('property-item', cell.colorClass);
    propertyItem.innerHTML = `${cell.text} <span>€${(index + 1) * 50}</span>`; // Ejemplo de precio en euros
    propertiesListDiv.appendChild(propertyItem);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dice = document.getElementById('dice');
  const result1 = document.getElementById('result1');
  const result2 = document.getElementById('result2');
  const resultContainer = document.querySelector('.result-container');

  // Prevent drag and drop for all images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', event => event.preventDefault());
  });

  dice.addEventListener('click', rollDice);
});

function rollDice() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;
  const sum = dice1Value + dice2Value;

  const result1 = document.getElementById('result1');
  const result2 = document.getElementById('result2');
  const resultContainer = document.querySelector('.result-container');

  result1.src = `images/dado/${dice1Value}.png`;
  result2.src = `images/dado/${dice2Value}.png`;
  result1.style.display = 'inline';
  result2.style.display = 'inline';
  resultContainer.style.display = 'flex';

  // Mostrar el resultado de la suma en el centro del tablero
  const board = document.getElementById('board');
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('dice-result');
  resultDiv.innerHTML = `
    <img src="images/resultados/${sum}.png" alt="Resultado ${sum}">
  `;
  board.appendChild(resultDiv);

  setTimeout(() => {
    result1.style.display = 'none';
    result2.style.display = 'none';
    resultContainer.style.display = 'none';
    resultDiv.remove();
    rollDiceForInitialOrder(dice1Value, dice2Value, sum);
  }, 2000);
}

function startGame() {
  document.querySelector('.play-button').style.display = 'none';

  // Mostrar selección de jugadores
  const playerSelectionDiv = document.createElement('div');
  playerSelectionDiv.classList.add('player-selection');
  playerSelectionDiv.innerHTML = `
    <h2>Selecciona el número de jugadores</h2>
    <button onclick="selectPlayers(2)">2 Jugadores</button>
    <button onclick="selectPlayers(3)">3 Jugadores</button>
    <button onclick="selectPlayers(4)">4 Jugadores</button>
  `;
  document.body.appendChild(playerSelectionDiv);
}

function selectPlayers(numPlayers) {
  // Ocultar selección de jugadores
  document.querySelector('.player-selection').style.display = 'none';

  // Mostrar campos para ingresar nombres de jugadores
  const playerNamesDiv = document.createElement('div');
  playerNamesDiv.classList.add('player-names');
  playerNamesDiv.innerHTML = `<h2>Ingresa los nombres de los jugadores</h2>`;
  
  for (let i = 1; i <= numPlayers; i++) {
    playerNamesDiv.innerHTML += `
      <label for="player${i}">Jugador ${i}:</label>
      <input type="text" id="player${i}" name="player${i}">
    `;
  }
  
  playerNamesDiv.innerHTML += `<button onclick="startGameWithNames()">Iniciar Juego</button>`;
  document.body.appendChild(playerNamesDiv);
}

const characters = [
  'jugador1.png',
  'jugador2.png',
  'jugador3.png',
  'jugador4.png',
  'jugador5.png'
];

let selectedCharacters = [];
let playerNames = [];
let initialRolls = [];
let currentPlayerIndex = 0;

function startGameWithNames() {
  // Obtener nombres de los jugadores
  playerNames = [];
  let valid = true;
  document.querySelectorAll('.player-names input').forEach(input => {
    if (input.value.trim() === '') {
      valid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
      playerNames.push(input.value);
    }
  });

  if (!valid) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = 'Todos los jugadores deben tener un nombre.';
    errorMessageDiv.style.display = 'block';
    return;
  }

  // Ocultar mensaje de error si todo es válido
  document.getElementById('error-message').style.display = 'none';

  // Ocultar campos de nombres de jugadores
  document.querySelector('.player-names').style.display = 'none';

  // Mostrar selección de personajes
  selectCharacter(0, playerNames);
}

function selectCharacter(playerIndex, playerNames) {
  if (playerIndex >= playerNames.length) {
    // Todos los jugadores han seleccionado sus personajes
    startGameWithCharacters(playerNames);
    return;
  }

  // Mostrar selección de personajes para el jugador actual
  const characterSelectionDiv = document.createElement('div');
  characterSelectionDiv.classList.add('character-selection');
  characterSelectionDiv.innerHTML = `<h2>${playerNames[playerIndex]}, elige tu personaje</h2>`;

  characters.forEach((character, index) => {
    if (!selectedCharacters.includes(character)) {
      const characterImg = document.createElement('img');
      characterImg.src = `images/jugadores/${character}`;
      characterImg.alt = `Personaje ${index + 1}`;
      characterImg.classList.add('character-img');
      characterImg.onclick = () => {
        selectedCharacters.push(character);
        characterSelectionDiv.remove();
        selectCharacter(playerIndex + 1, playerNames);
      };
      characterSelectionDiv.appendChild(characterImg);
    }
  });

  document.body.appendChild(characterSelectionDiv);
}

function startGameWithCharacters(playerNames) {
  // Mostrar nombres de jugadores y sus personajes en el lado izquierdo
  const playerListDiv = document.createElement('div');
  playerListDiv.classList.add('player-list');
  playerListDiv.innerHTML = `<h2>Jugadores</h2>`;

  playerNames.forEach((name, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player-name');
    playerDiv.innerHTML = `
      <img src="images/jugadores/${selectedCharacters[index]}" alt="Personaje ${index + 1}" class="player-character">
      <span>${name}</span>
      <span class="player-money">1200€</span>
    `;
    playerListDiv.appendChild(playerDiv);
  });

  document.body.appendChild(playerListDiv);

  // Colocar las fichas en la casilla de Salida
  const salidaCell = document.querySelector('.cell.SALIDA');
  playerNames.forEach((name, index) => {
    const characterImg = document.createElement('img');
    characterImg.src = `images/jugadores/${selectedCharacters[index]}`;
    characterImg.alt = `Personaje ${index + 1}`;
    characterImg.classList.add('board-character');
    salidaCell.appendChild(characterImg);
  });

  // Mover las imágenes de fondo
  document.querySelector('.background-image.left').classList.add('move-left');
  document.querySelector('.background-image.right').classList.add('move-right');

  // Mostrar mensaje de bienvenida
  document.getElementById('welcome-message').style.display = 'block';
}

function closeWelcomeMessage() {
  document.getElementById('welcome-message').style.display = 'none';
  document.getElementById('initial-roll-message').style.display = 'block';
}

function startInitialRoll() {
  document.getElementById('initial-roll-message').style.display = 'none';
  document.getElementById('dice').style.display = 'inline';
  initialRolls = new Array(playerNames.length).fill(0);
  currentPlayerIndex = 0;
  document.getElementById('initial-roll-results').innerHTML = '';
  document.getElementById('initial-roll-results').style.display = 'block';
  promptPlayerToRoll();
}

function promptPlayerToRoll() {
  if (currentPlayerIndex >= playerNames.length) {
    determineFirstPlayer();
    return;
  }

  const rollPrompt = document.createElement('div');
  rollPrompt.classList.add('roll-prompt');
  rollPrompt.innerHTML = `Es el turno de ${playerNames[currentPlayerIndex]} para lanzar los dados.`;
  document.getElementById('initial-roll-results').appendChild(rollPrompt);

  document.getElementById('dice').addEventListener('click', rollDice);
}

function rollDiceForInitialOrder(dice1Value, dice2Value, sum) {
  const dice = document.getElementById('dice');
  dice.removeEventListener('click', rollDice);

  initialRolls[currentPlayerIndex] = sum;

  const rollResultDiv = document.createElement('div');
  rollResultDiv.classList.add('roll-result');
  rollResultDiv.innerHTML = `
    <span>${playerNames[currentPlayerIndex]}: </span>
    <img src="images/numeros/${sum}.png" alt="Resultado ${sum}">
    <span>${sum}</span>
  `;
  document.getElementById('initial-roll-results').appendChild(rollResultDiv);

  setTimeout(() => {
    currentPlayerIndex++;
    promptPlayerToRoll();
  }, 2000);
}

function determineFirstPlayer() {
  const maxRoll = Math.max(...initialRolls);
  const firstPlayerIndex = initialRolls.indexOf(maxRoll);
  const firstPlayerMessage = document.createElement('div');
  firstPlayerMessage.classList.add('first-player-message');
  firstPlayerMessage.innerHTML = `El jugador ${playerNames[firstPlayerIndex]} comenzará el juego.`;
  document.getElementById('initial-roll-results').appendChild(firstPlayerMessage);
  document.getElementById('dice').style.display = 'inline';
}


