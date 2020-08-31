
const api = require('./api')
const ui = require('./ui')

const onStartGame = function (event) {
  event.preventDefault()
  console.log('startGame is', event)
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onGetAllGames = function (event) {
  event.preventDefault()
  console.log('get all game is', event)
  api.getAllGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
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
  onUpdateGame: onUpdateGame
}
