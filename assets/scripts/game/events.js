
const api = require('./api.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
}

module.exports = {
  onCreateGame: onCreateGame
}
