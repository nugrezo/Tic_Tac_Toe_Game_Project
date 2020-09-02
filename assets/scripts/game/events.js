
const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'X'

const onBoxClick = function (event) {
  const box = $(event.target)
  box.text(currentPlayer)
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  console.log('onBoxClick ran')
  console.log('box')
}
const onStartGame = function (event) {
  event.preventDefault()
  console.log('startGame is', event)
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onGetAllGames = function (event) {
  event.preventDefault()
  console.log('event is', event)
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('update game is', event)
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onStartGame: onStartGame,
  onGetAllGames: onGetAllGames,
  onUpdateGame: onUpdateGame,
  onBoxClick: onBoxClick
}
