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
  { type: 'lucky', text: '', position: '11 / 6' }, 
  { type: 'property', text: 'Aula-DAM', position: '11 / 5' },
  { type: 'lucky', text: '', position: '11 / 4' },
  { type: 'property', text: 'Aula-ASIX', position: '11 / 3' },
  { type: 'property', text: 'Despacho Paco', position: '11 / 2' },
  { type: 'corner', text: '', position: '11 / 1', class: 'CÁRCEL' },
  // Lado izquierdo
  { type: 'property', text: 'Aula-GEAD', position: '10 / 1' },
  { type: 'tax', text: '', position: '9 / 1' , class: 'examen-roberto'},
  { type: 'property', text: 'Secretaria', position: '8 / 1' },
  { type: 'property', text: 'Casa de Roberto', position: '7 / 1' },
  { type: 'community', text: '', position: '6 / 1' }, 
  { type: 'property', text: '1r ESO', position: '5 / 1' },
  { type: 'community', text: '', position: '4 / 1' },
  { type: 'property', text: '2nd ESO', position: '3 / 1' },
  { type: 'property', text: '3r ESO', position: '2 / 1' },
  { type: 'corner', text: '', position: '1 / 1', class: 'PARKING' },
  // Lado superior
  { type: 'property', text: '4t ESO', position: '1 / 2' },
  { type: 'lucky', text: '', position: '1 / 3' },
  { type: 'property', text: 'Despacho Amador', position: '1 / 4' },
  { type: 'property', text: '1r Bachillerato', position: '1 / 5' },
  { type: 'community', text: '', position: '1 / 6' }, 
  { type: 'property', text: '2nd Bachillerato', position: '1 / 7' },
  { type: 'property', text: 'Aula-MIPA-A', position: '1 / 8' },
  { type: 'tax', text: '', position: '1 / 9', class: 'soborno-javi' },
  { type: 'property', text: 'Aula-MIPA-B', position: '1 / 10' },
  { type: 'corner', text: '', position: '1 / 11', class: 'IR_A_LA_CÁRCEL' },
  // Lado derecho
  { type: 'property', text: 'Aula-DAW', position: '2 / 11' },
  { type: 'property', text: 'Despacho Director', position: '3 / 11' },
  { type: 'community', text: 'Caja de Comunidad', position: '4 / 11' },
  { type: 'property', text: 'Monlau Maquinista', position: '5 / 11' },
  { type: 'lucky', text: '', position: '6 / 11' },
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

/**
 * Lanza los dados y muestra los resultados.
 */
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
  resultDiv.innerHTML = `<img src="images/resultados/${sum}.png" alt="Resultado ${sum}">`;
  board.appendChild(resultDiv);

  setTimeout(() => {
    result1.style.display = 'none';
    result2.style.display = 'none';
    resultContainer.style.display = 'none';
    resultDiv.remove();
    rollDiceForInitialOrder(dice1Value, dice2Value, sum);
  }, 2000);
}

/**
 * Inicia el juego ocultando el botón de jugar y mostrando la selección de jugadores.
 */
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

/**
 * Selecciona el número de jugadores y muestra los campos de entrada para los nombres de los jugadores.
 * @param {number} numPlayers - El número de jugadores.
 */
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
  'jugador5.png',
  'jugador6.png',
  'jugador7.png',
  'jugador8.png',
  'jugador9.png',
  'jugador10.png',
  'jugador11.png',
  'jugador12.png',
];

let selectedCharacters = [];
let playerNames = [];
let initialRolls = [];
let currentPlayerIndex = 0;
let playerBalances = [];
let propertiesOwned = {};
let playersInJail = [];

/**
 * Inicia el juego con los nombres de los jugadores ingresados.
 */
function startGameWithNames() {
  // Obtener nombres de los jugadores
  playerNames = [];
  let valid = true;
  const nameSet = new Set();
  document.querySelectorAll('.player-names input').forEach(input => {
    const name = input.value.trim();
    if (name === '' || nameSet.has(name)) {
      valid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
      playerNames.push(name);
      nameSet.add(name);
    }
  });

  if (!valid) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = 'Todos los jugadores deben tener un nombre único.';
    errorMessageDiv.style.display = 'block';
    return;
  }

  // Inicializar saldos de los jugadores y propiedades poseídas
  playerBalances = new Array(playerNames.length).fill(1200);
  propertiesOwned = {};

  // Ocultar mensaje de error si todo es válido
  document.getElementById('error-message').style.display = 'none';

  // Ocultar campos de nombres de jugadores
  document.querySelector('.player-names').style.display = 'none';

  // Mostrar selección de personajes
  selectCharacter(0, playerNames);
}

/**
 * Muestra la selección de personajes para el jugador actual.
 * @param {number} playerIndex - El índice del jugador actual.
 * @param {Array} playerNames - La lista de nombres de los jugadores.
 */
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

/**
 * Inicia el juego con los personajes seleccionados.
 * @param {Array} playerNames - La lista de nombres de los jugadores.
 */
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
    characterImg.dataset.player = index;
    characterImg.dataset.position = 0;
    salidaCell.appendChild(characterImg);
  });

  // Mover las imágenes de fondo
  document.querySelector('.background-image.left').classList.add('move-left');
  document.querySelector('.background-image.right').classList.add('move-right');

  // Mostrar mensaje de bienvenida
  document.getElementById('welcome-message').style.display = 'block';
}

/**
 * Cierra el mensaje de bienvenida y muestra el mensaje de lanzamiento inicial.
 */
function closeWelcomeMessage() {
  document.getElementById('welcome-message').style.display = 'none';
  document.getElementById('initial-roll-message').style.display = 'block';
}

/**
 * Inicia el lanzamiento inicial para todos los jugadores.
 */
function startInitialRoll() {
  document.getElementById('initial-roll-message').style.display = 'none';
  document.getElementById('dice').style.display = 'inline';
  initialRolls = new Array(playerNames.length).fill(0);
  currentPlayerIndex = 0;
  document.getElementById('initial-roll-results').innerHTML = '';
  document.getElementById('initial-roll-results').style.display = 'block';
  promptPlayerToRoll();
}

/**
 * Solicita al jugador actual que lance los dados.
 */
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

/**
 * Maneja el lanzamiento de dados para determinar el orden inicial.
 * @param {number} dice1Value - El valor del primer dado.
 * @param {number} dice2Value - El valor del segundo dado.
 * @param {number} sum - La suma de los valores de los dados.
 */
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

/**
 * Determina el primer jugador basado en los lanzamientos iniciales.
 */
function determineFirstPlayer() {
  const maxRoll = Math.max(...initialRolls);
  const firstPlayerIndex = initialRolls.indexOf(maxRoll);
  const firstPlayerMessage = document.createElement('div');
  firstPlayerMessage.classList.add('first-player-message');
  firstPlayerMessage.innerHTML = `El jugador ${playerNames[firstPlayerIndex]} comenzará el juego.`;
  document.getElementById('initial-roll-results').innerHTML = ''; // Clear previous roll results
  document.getElementById('initial-roll-results').appendChild(firstPlayerMessage);

  setTimeout(() => {
    document.getElementById('initial-roll-results').innerHTML = ''; // Clear previous roll results
    startTurns();
  }, 2000);
}

/**
 * Inicia los turnos para los jugadores.
 */
function startTurns() {
  currentPlayerIndex = initialRolls.indexOf(Math.max(...initialRolls));
  playTurn();
}

/**
 * Juega el turno para el jugador actual.
 */
function playTurn() {
  const currentPlayer = playerNames[currentPlayerIndex];

  // Verificar si el jugador está en la cárcel
  if (playersInJail.includes(currentPlayerIndex)) {
    // Eliminar el jugador de la lista de jugadores en la cárcel
    playersInJail = playersInJail.filter(index => index !== currentPlayerIndex);

    // Pasar al siguiente jugador
    currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
    playTurn();
    return;
  }

  const rollPromptContainer = document.getElementById('initial-roll-results');
  rollPromptContainer.innerHTML = ''; // Clear previous roll prompt

  const rollPrompt = document.createElement('div');
  rollPrompt.classList.add('roll-prompt');
  rollPrompt.innerHTML = `Es el turno de ${currentPlayer}. Lanza los dados.`;
  rollPromptContainer.appendChild(rollPrompt);

  document.getElementById('dice').addEventListener('click', () => {
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
      movePlayer(currentPlayerIndex, sum);
    }, 2000);
  }, { once: true });
}

/**
 * Mueve al jugador por el número especificado de pasos.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} steps - El número de pasos a mover.
 */
function movePlayer(playerIndex, steps) {
  const playerCharacter = document.querySelector(`.board-character[data-player="${playerIndex}"]`);
  let currentPosition = parseInt(playerCharacter.dataset.position);
  let newPosition = (currentPosition + steps) % cells.length;

  // Verificar si el jugador pasa por la casilla "SALIDA"
  if (newPosition < currentPosition) {
    playerBalances[playerIndex] += 300; // Añadir 300€ por pasar por "SALIDA"
    updatePlayerList();
  }

  playerCharacter.dataset.position = newPosition;
  const newCell = document.querySelector(`.cell:nth-child(${newPosition + 1})`);
  newCell.appendChild(playerCharacter);

  handleCellAction(playerIndex, newPosition);
}

/**
 * Maneja la acción para la casilla en la que el jugador ha caído.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} cellIndex - El índice de la casilla.
 */
function handleCellAction(playerIndex, cellIndex) {
  const cell = cells[cellIndex];
  if (cell.type === 'property' && !propertiesOwned[cellIndex]) {
    promptPropertyPurchase(playerIndex, cellIndex);
  } else if (cell.type === 'property' && propertiesOwned[cellIndex] !== playerIndex) {
    payRent(playerIndex, cellIndex);
  } else if (cell.class === 'IR_A_LA_CÁRCEL') {
    goToPrison(playerIndex);
  } else if (cell.class === 'PARKING') {
    handleParkingEvent(playerIndex);
  } else if (cell.class === 'soborno-javi') {
    handleSobornoJaviEvent(playerIndex);
  } else if (cell.class === 'examen-roberto') {
    handleExamenRobertoEvent(playerIndex);
  } else if (cell.type === 'lucky') {
    handleLuckyEvent(playerIndex);
  } else if (cell.type === 'community') {
    handleCommunityEvent(playerIndex);
  } else {
    // Pasar al siguiente jugador si no hay acción
    currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
    playTurn();
  }
}

/**
 * Maneja el evento cuando un jugador cae en la casilla "examen-roberto".
 * @param {number} playerIndex - El índice del jugador.
 */
function handleExamenRobertoEvent(playerIndex) {
  const examenContainer = document.getElementById('examen-roberto-container');
  examenContainer.classList.add('examen-prompt');

  const amount = Math.random() < 0.5 ? -200 : -400;
  playerBalances[playerIndex] += amount;

  const message = amount === -200 ? '¡Has perdido 200€!' : '¡Has perdido 400€ y Roberto se ríe de ti!';
  examenContainer.innerHTML = `
    <h2>${message}</h2>
    <button onclick="closeExamenPrompt()">Aceptar</button>
  `;

  examenContainer.style.display = 'block';
  updatePlayerList();
}

function closeExamenPrompt() {
  const examenContainer = document.getElementById('examen-roberto-container');
  examenContainer.style.display = 'none';
  examenContainer.innerHTML = '';

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Maneja el evento cuando un jugador cae en la casilla "soborno-javi".
 * @param {number} playerIndex - El índice del jugador.
 */
function handleSobornoJaviEvent(playerIndex) {
  const sobornoContainer = document.getElementById('soborno-javi-container');
  sobornoContainer.classList.add('soborno-prompt');
  sobornoContainer.innerHTML = `
    <h2>${playerNames[playerIndex]}, has encontrado a Javi</h2>
    <p>¿Qué quieres hacer?</p>
    <button onclick="saludarJavi(${playerIndex})">Saludar</button>
    <button onclick="sobornarJavi(${playerIndex})">Sobornar</button>
  `;

  sobornoContainer.style.display = 'block';
}

/**
 * Muestra el resultado del evento "soborno-javi".
 * @param {number} playerIndex - El índice del jugador.
 * @param {string} message - El mensaje a mostrar.
 */
function showSobornoResult(playerIndex, message) {
  const sobornoContainer = document.getElementById('soborno-javi-container');
  sobornoContainer.innerHTML = `
    <h2>${message}</h2>
    <button onclick="closeSobornoPrompt()">Aceptar</button>
  `;
  updatePlayerList();
}

/**
 * Cierra el mensaje del evento "soborno-javi".
 */
function closeSobornoPrompt() {
  const sobornoContainer = document.getElementById('soborno-javi-container');
  sobornoContainer.style.display = 'none';
  sobornoContainer.innerHTML = '';

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Maneja el evento cuando un jugador elige saludar a Javi.
 * @param {number} playerIndex - El índice del jugador.
 */
function saludarJavi(playerIndex) {
  const outcome = Math.random() < 0.5 ? 'gain' : 'lose';
  const amount = outcome === 'gain' ? 100 : -50;
  playerBalances[playerIndex] += amount;

  const message = outcome === 'gain' ? '¡Javi te ha dado 100€!' : '¡Javi te ha quitado 50€!';
  showSobornoResult(playerIndex, message);
}

/**
 * Maneja el evento cuando un jugador elige sobornar a Javi.
 * @param {number} playerIndex - El índice del jugador.
 */
function sobornarJavi(playerIndex) {
  const outcome = Math.random() < 0.5 ? 'gain' : 'lose';
  const amount = outcome === 'gain' ? 300 : -200;
  playerBalances[playerIndex] += amount;

  const message = outcome === 'gain' ? '¡Has ganado 300€!' : '¡Has perdido 200€!';
  showSobornoResult(playerIndex, message);
}

/**
 * Muestra el resultado del evento "soborno-javi".
 * @param {number} playerIndex - El índice del jugador.
 * @param {string} message - El mensaje a mostrar.
 */
function showSobornoResult(playerIndex, message) {
  const sobornoPromptContainer = document.querySelector('.soborno-prompt');
  sobornoPromptContainer.innerHTML = `
    <h2>${message}</h2>
    <button onclick="closeSobornoPrompt()">Aceptar</button>
  `;
  updatePlayerList();
}

/**
 * Cierra el mensaje del evento "soborno-javi".
 */
function closeSobornoPrompt() {
  const sobornoPromptContainer = document.querySelector('.soborno-prompt');
  sobornoPromptContainer.remove();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Maneja el evento cuando un jugador cae en la casilla "PARKING".
 * @param {number} playerIndex - El índice del jugador.
 */
function handleParkingEvent(playerIndex) {
  const event = Math.random() < 0.5 ? 'found' : 'stolen';
  const amount = event === 'found' ? 200 : -100;
  playerBalances[playerIndex] += amount;

  const parkingPromptContainer = document.createElement('div');
  parkingPromptContainer.classList.add('parking-prompt');
  parkingPromptContainer.innerHTML = `
    <h2>${playerNames[playerIndex]} ha caído en el Parking</h2>
    <p>${event === 'found' ? '¡Has encontrado 200€ en el suelo!' : '¡Te han robado 100€!'}</p>
    <button onclick="closeParkingPrompt()">Aceptar</button>
  `;
  document.body.appendChild(parkingPromptContainer);

  updatePlayerList();
}

/**
 * Cierra el mensaje del evento "PARKING".
 */
function closeParkingPrompt() {
  const parkingPromptContainer = document.querySelector('.parking-prompt');
  parkingPromptContainer.remove();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Envía al jugador a la cárcel.
 * @param {number} playerIndex - El índice del jugador.
 */
function goToPrison(playerIndex) {
  playerBalances[playerIndex] -= 100; // Pagar multa de 100€
  updatePlayerList();

  // Añadir el jugador a la lista de jugadores en la cárcel
  playersInJail.push(playerIndex);

  // Mostrar mensaje de ir a la cárcel
  const jailPromptContainer = document.createElement('div');
  jailPromptContainer.classList.add('jail-prompt');
  jailPromptContainer.innerHTML = `
    <h2>${playerNames[playerIndex]} va a la cárcel</h2>
    <p>Has pagado una multa de 100€ y te quedarás un turno en la cárcel.</p>
    <button onclick="closeJailPrompt()">Aceptar</button>
  `;
  document.body.appendChild(jailPromptContainer);

  // Mover al jugador a la casilla de cárcel
  const jailCell = document.querySelector('.cell.CÁRCEL');
  const playerCharacter = document.querySelector(`.board-character[data-player="${playerIndex}"]`);
  playerCharacter.dataset.position = cells.findIndex(cell => cell.class === 'CÁRCEL');
  jailCell.appendChild(playerCharacter);

  // Saltar el siguiente turno del jugador
  setTimeout(() => {
    currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
    playTurn();
  }, 5000);
}

/**
 * Cierra el mensaje del evento "jail".
 */
function closeJailPrompt() {
  const jailPromptContainer = document.querySelector('.jail-prompt');
  jailPromptContainer.remove();
}

/**
 * Muestra el mensaje de compra para una propiedad.
 * @param {Object} property - El objeto de la propiedad.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} cellIndex - El índice de la casilla.
 */
function showPurchasePrompt(property, playerIndex, cellIndex) {
  const purchasePromptContainer = document.getElementById("purchase-prompt-container");

  purchasePromptContainer.innerHTML = `
    <div class="purchase-prompt">
      <h2>¿Quieres comprar ${property.text}?</h2>
      <p>Precio: €${(cellIndex + 1) * 50}</p>
      <button onclick="buyProperty(${playerIndex}, ${cellIndex}, ${(cellIndex + 1) * 50})">Comprar</button>
      <button onclick="skipPurchase()">No, gracias</button>
    </div>
  `;

  purchasePromptContainer.style.display = "block";
}

/**
 * Cierra el mensaje de compra.
 */
function closePurchasePrompt() {
  const purchasePromptContainer = document.getElementById("purchase-prompt-container");
  purchasePromptContainer.style.display = "none";
  purchasePromptContainer.innerHTML = ""; // Limpia el contenido
}

/**
 * Omite la compra de la propiedad.
 */
function skipPurchase() {
  closePurchasePrompt();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Solicita al jugador que compre una propiedad.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} cellIndex - El índice de la casilla.
 */
function promptPropertyPurchase(playerIndex, cellIndex) {
  const cell = cells[cellIndex];
  const propertyPrice = (cellIndex + 1) * 50;
  const playerBalance = playerBalances[playerIndex];

  // Verificar si la propiedad ya está poseída por otro jugador
  if (propertiesOwned[cellIndex] !== undefined) {
    // Pasar al siguiente jugador si la propiedad ya está comprada
    currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
    playTurn();
    return;
  }

  if (playerBalance >= propertyPrice) {
    showPurchasePrompt(cell, playerIndex, cellIndex);
  } else {
    showInsufficientFundsMessage(playerIndex);
  }
}

/**
 * Muestra el mensaje de fondos insuficientes.
 * @param {number} playerIndex - El índice del jugador.
 */
function showInsufficientFundsMessage(playerIndex) {
  const purchasePromptContainer = document.getElementById("purchase-prompt-container");

  purchasePromptContainer.innerHTML = `
    <div class="purchase-prompt">
      <h2>No tienes suficiente dinero para comprar esta propiedad.</h2>
      <button onclick="skipPurchase()">Pasar Turno</button>
    </div>
  `;

  purchasePromptContainer.style.display = "block";
}

/**
 * Compra la propiedad para el jugador.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} cellIndex - El índice de la casilla.
 * @param {number} propertyPrice - El precio de la propiedad.
 */
function buyProperty(playerIndex, cellIndex, propertyPrice) {
  playerBalances[playerIndex] -= propertyPrice;
  propertiesOwned[cellIndex] = playerIndex;

  // Display the owner's image inside the property cell at the top center
  const propertyCell = document.querySelector(`.cell:nth-child(${cellIndex + 1})`);
  const ownerImg = document.createElement('img');
  ownerImg.src = `images/jugadores/${selectedCharacters[playerIndex]}`;
  ownerImg.alt = `Owner ${playerNames[playerIndex]}`;
  ownerImg.classList.add('property-owner');
  propertyCell.style.position = 'relative'; // Ensure the cell is positioned relative
  propertyCell.appendChild(ownerImg);

  closePurchasePrompt();
  updatePlayerList();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Paga el alquiler al propietario de la propiedad.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} cellIndex - El índice de la casilla.
 */
function payRent(playerIndex, cellIndex) {
  const ownerIndex = propertiesOwned[cellIndex];
  const rent = (cellIndex + 1) * 50 * 0.1; // 10% del valor de la propiedad

  const rentPromptContainer = document.getElementById("purchase-prompt-container");
  rentPromptContainer.innerHTML = `
    <div class="rent-prompt">
      <h2>${playerNames[playerIndex]} ha caído en ${cells[cellIndex].text}</h2>
      <p>Debe pagar €${rent.toFixed(2)} a ${playerNames[ownerIndex]}</p>
      <button onclick="payRentAmount(${playerIndex}, ${ownerIndex}, ${rent.toFixed(2)})">Pagar</button>
    </div>
  `;
  rentPromptContainer.style.display = "block";
}

/**
 * Paga el monto del alquiler al propietario de la propiedad.
 * @param {number} playerIndex - El índice del jugador.
 * @param {number} ownerIndex - El índice del propietario de la propiedad.
 * @param {number} rent - El monto del alquiler.
 */
function payRentAmount(playerIndex, ownerIndex, rent) {
  playerBalances[playerIndex] -= rent;
  playerBalances[ownerIndex] += rent;

  const rentPromptContainer = document.getElementById("purchase-prompt-container");
  rentPromptContainer.style.display = "none";
  rentPromptContainer.innerHTML = ""; // Limpia el contenido

  updatePlayerList();
  checkBankruptcy(playerIndex);

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

/**
 * Verifica si el jugador está en bancarrota.
 * @param {number} playerIndex - El índice del jugador.
 */
function checkBankruptcy(playerIndex) {
  if (playerBalances[playerIndex] <= 0) {
    alert(`${playerNames[playerIndex]} se ha quedado sin dinero y está en bancarrota.`);
    playerNames.splice(playerIndex, 1);
    selectedCharacters.splice(playerIndex, 1);
    playerBalances.splice(playerIndex, 1);

    // Actualizar el índice del jugador actual
    if (currentPlayerIndex >= playerNames.length) {
      currentPlayerIndex = 0;
    }

    updatePlayerList();
    checkGameEnd();
  }
}

/**
 * Verifica si el juego ha terminado.
 */
function checkGameEnd() {
  if (playerNames.length === 1) {
    alert(`¡${playerNames[0]} es el ganador!`);
    // Reiniciar el juego o mostrar un mensaje final
    location.reload(); // Recargar la página para reiniciar el juego
  }
}

/**
 * Actualiza la visualización de la lista de jugadores.
 */
function updatePlayerList() {
  const playerListDiv = document.querySelector('.player-list');
  playerListDiv.innerHTML = `<h2>Jugadores</h2>`;

  playerNames.forEach((name, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player-name');
    playerDiv.innerHTML = `
      <img src="images/jugadores/${selectedCharacters[index]}" alt="Personaje ${index + 1}" class="player-character">
      <span>${name}</span>
      <span class="player-money">€${playerBalances[index]}</span>
    `;
    playerListDiv.appendChild(playerDiv);
  });
}

const luckyCards = [
  { image: 'images/suerte/suerte1.png', action: (playerIndex) => {playerBalances[playerIndex] += 200;} },
  { image: 'images/suerte/suerte2.png', action: (playerIndex) => {handleLuckyEvent(playerIndex);} },
  { image: 'images/suerte/suerte3.png', action: (playerIndex) => { playerBalances[playerIndex] += 100; } },
  { image: 'images/suerte/suerte4.png', action: (playerIndex) => { playerBalances[playerIndex] += 50; } },
  { image: 'images/suerte/suerte5.png', action: (playerIndex) => { playerBalances[playerIndex] += 50; } },
  { image: 'images/suerte/suerte6.png', action: (playerIndex) => { playerBalances[playerIndex] += 1; } },
  { image: 'images/suerte/suerte7.png', action: (playerIndex) => { playerBalances[playerIndex] -= 20; } },
  { image: 'images/suerte/suerte8.png', action: (playerIndex) => { playerBalances[playerIndex] -= 100; } },
];

function handleLuckyEvent(playerIndex) {
  const randomIndex = Math.floor(Math.random() * luckyCards.length);
  const luckyCard = luckyCards[randomIndex];

  const luckyPromptContainer = document.createElement('div');
  luckyPromptContainer.classList.add('lucky-prompt');
  luckyPromptContainer.innerHTML = `
    <img src="${luckyCard.image}" alt="Carta de suerte" style="display: block; margin: 0 auto;">
    <button onclick="applyLuckyCard(${playerIndex}, ${randomIndex})" style="display: block; margin: 10px auto;">Aceptar</button>
  `;
  document.body.appendChild(luckyPromptContainer);
}

function applyLuckyCard(playerIndex, cardIndex) {
  const luckyCard = luckyCards[cardIndex];
  luckyCard.action(playerIndex);

  const luckyPromptContainer = document.querySelector('.lucky-prompt');
  luckyPromptContainer.remove();

  updatePlayerList();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}

const communityCards = [
  { image: 'images/caja/caja1.png', action: (playerIndex) => {playerBalances[playerIndex] -= 200;} },
  { image: 'images/caja/caja2.png', action: (playerIndex) => { playerBalances[playerIndex] -= 10; } },
  { image: 'images/caja/caja3.png', action: (playerIndex) => { playerBalances[playerIndex] -= 100; } },
  { image: 'images/caja/caja4.png', action: (playerIndex) => { playerBalances[playerIndex] -= 200; } },
  { image: 'images/caja/caja5.png', action: (playerIndex) => { playerBalances[playerIndex] += 500; } },
  { image: 'images/caja/caja6.png', action: (playerIndex) => { playerBalances[playerIndex] += 100; } },
];

function handleCommunityEvent(playerIndex) {
  const randomIndex = Math.floor(Math.random() * communityCards.length);
  const communityCard = communityCards[randomIndex];

  const communityPromptContainer = document.createElement('div');
  communityPromptContainer.classList.add('community-prompt');
  communityPromptContainer.innerHTML = `
    <img src="${communityCard.image}" alt="Carta de comunidad" style="display: block; margin: 0 auto;">
    <button onclick="applyCommunityCard(${playerIndex}, ${randomIndex})" style="display: block; margin: 10px auto;">Aceptar</button>
  `;
  document.body.appendChild(communityPromptContainer);
}

function applyCommunityCard(playerIndex, cardIndex) {
  const communityCard = communityCards[cardIndex];
  communityCard.action(playerIndex);

  const communityPromptContainer = document.querySelector('.community-prompt');
  communityPromptContainer.remove();

  updatePlayerList();

  // Pasar al siguiente jugador
  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playTurn();
}