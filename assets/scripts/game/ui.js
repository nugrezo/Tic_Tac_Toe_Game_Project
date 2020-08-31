
const store = require('../store.js')

const startGameSuccess = function (res) {
  store.game = res.game
  $('#message').text('Start Playing')
  console.log('game start')
}

const startGameFailure = function () {
  ('#message').text('Create A New Game Failed')
}

const getAllGameSuccess = function (res) {
  store.game = res.game
  $('#message').text('Get Game Successful')
}

const getAllGameFailure = function () {
  $('#message').text('Get Game Failed')
}

const updateGameSuccess = function (res) {
  store.game = res.game
  $('#message').text('Update Game Successful')
}

const updateGameFailure = function () {
  $('#message').text('Update Game Failed')
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  getAllGameSuccess,
  getAllGameFailure,
  updateGameSuccess,
  updateGameFailure
}
