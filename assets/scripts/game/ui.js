
const store = require('../store.js')


const startGameUiSuccess = function (res) {
  store.game = res.game
  $('#game-board').show()
  $('#whose-turn-message').show()
}
    
const startGameUiFailure = function (err) {
  $('#invalid-message').text("The game start failed!!!")
}

module.exports = {
  startGameUiSuccess: startGameUiSuccess,
  startGameUiFailure:startGameUiFailure
}