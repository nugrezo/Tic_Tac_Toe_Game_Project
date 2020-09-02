
const store = require('../store.js')

const startGameSuccess = function (res) {
  store.game = res.game
}

const startGameFailure = function () {
  ('#message').text('Create A New Game Failed')
}

const getAllGamesSuccess = function (res) {
  store.game = res.game
  $('#message1').text(`You Played ${res.games.length} games`)
}

const getAllGamesFailure = function () {
  $('#message1').text('Get Game Failed')
}

const updateGameSuccess = function (res) {
  store.game = res.game
  $('#message').text('Update Game Successful')
}

const updateGameFailure = function () {
  $('#message').text('Update Game Failed')
}

module.exports = {
  startGameSuccess: startGameSuccess,
  startGameFailure: startGameFailure,
  getAllGamesSuccess: getAllGamesSuccess,
  getAllGamesFailure: getAllGamesFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure

}
