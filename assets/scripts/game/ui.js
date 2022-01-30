
const store = require('../store.js')


const startGameUiSuccess = function (res) {
  store.game = res.game
  $('.container').show()
  $('.box').html('')
  $('#whose-turn-message').show()
}
    
const startGameUiFailure = function (err) {
  $('#invalid-message').text("The game start failed!!!")
}

const getAllGamesSuccessUi = function (res) {
  store.games = res.games
  let numberOfGames = res.games.length
  $('#number-of-games-played').text("Number of the Games Played :     " + numberOfGames)
}


const getAllGamesFailureUi = function (err) {
  $('#number-of-games-played').text("Could not get the number of games played")
}

const drawMessage = function () {
  $('#game-status-message').text('It is a draw')
}

const winMessage = function (player) {
  $('#game-status-message').text(`The winner is ${player}`)
}

module.exports = {
  startGameUiSuccess: startGameUiSuccess,
  startGameUiFailure: startGameUiFailure,
  getAllGamesSuccessUi: getAllGamesSuccessUi,
  getAllGamesFailureUi: getAllGamesFailureUi,
  drawMessage: drawMessage,
  winMessage,winMessage
  
  
}