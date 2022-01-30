const api = require('./api')
const ui = require('./ui')

const startGameEvent = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.startGameUiSuccess)
    .catch(ui.startGameUiFailure)
  }

module.exports = {
  startGameEvent: startGameEvent

}
