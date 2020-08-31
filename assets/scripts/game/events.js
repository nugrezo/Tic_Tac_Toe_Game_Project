
const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const onShowAGame = function (event) {
  event.preventDefault()
  api.showAGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

module.exports = {
  onCreateGame: onCreateGame,
  onGetGames: onGetGames,
  onShowAGame: onShowAGame
}
