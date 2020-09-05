const api = require('./api')
const ui = require('./ui')

// initializing currentPlayer status, gamecell and game status.

let currentPlayer = 'X'
let game = ['', '', '', '', '', '', '', '', '']
let over = false

// Defining game winning variations in array to loop through in array in oder to
// find winner and draw
const gameWinningVariations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// looping through in array to compose winnervarioations and pushing those into
// array
const winGame = function () {
  for (let i = 0; i < gameWinningVariations.length; i++) {
    const newArr = []
    const winnerVariation = gameWinningVariations[i]
    newArr.push(game[winnerVariation[0]])
    newArr.push(game[winnerVariation[1]])
    newArr.push(game[winnerVariation[2]])

    // wiritng a condition for checking new array if all index in newArr equls and empty.
    if (newArr[0] === newArr[1] && newArr[1] === newArr[2] && newArr[0] !== '') {
      $('#game-message-status-game').text(`${currentPlayer} won the game`)
      over = true
    }
  }
}
// determining the draw situation using some method when the board is cliced.
const drawGame = function () {
  const clickOnGame = game.some(box => box === '')
  if (clickOnGame !== true && over === false) {
    $('#game-message-status-game').text('Game is draw')
    over = true
  }
}
// upating the api when box is clicked with the current palyer
// and executing winGame and draw game function when box is clicked.

const onBoxClick = function (event) {
  event.preventDefault()
  const clickedBox = $(event.target)

  if ((over === false) && (clickedBox.text() !== 'X' && clickedBox.text() !== 'O')) {
    const boxNum = clickedBox.attr('data-cell-index')

    game[boxNum] = currentPlayer

    $(clickedBox).text(currentPlayer)

    winGame()
    drawGame()

    const data = {
      game: {
        cell: {
          index: boxNum,
          value: currentPlayer
        },
        over: over
      }
    }

    api.updateGame(data)

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  }
}

// clering game table and uptdating ip witht the current player
const onStartGame = function (event) {
  game = ['', '', '', '', '', '', '', '', '']
  over = false
  currentPlayer = 'X'
  api.startGame()
    .then(ui.startGameSuccess)
}
// shows the number of the games played
const onGetAllGames = function (event) {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

module.exports = {
  onStartGame: onStartGame,
  onGetAllGames: onGetAllGames,
  onBoxClick: onBoxClick,
  drawGame: drawGame
}
