
const store = require('../store.js')

const createGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('Start Playing')
  $('#gameID').text('Game ID:' + response.game.id)
  $('game-board').show()
  console.log('game start')
}

const createGameFailure = function () {
  ('#message').text('Create Game Failed')
}

const getGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('Get Game Successful')
}

const getGameFailure = function () {
  $('#message').text('Get Game Failed')
}

const showGameSuccess = function (reponse) {
  $('#message').text('Show Game Successful')
}

const showGameFailure = function () {
  $('#message').text('Show Game Failed')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getGameSuccess,
  getGameFailure,
  showGameSuccess,
  showGameFailure
}
