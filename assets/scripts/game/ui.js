
const store = require('../store.js')

const startGameSuccess = function (res) {
  store.game = res.game
  $('.box').text('')
  $('#auth-message-sign-up').hide()
  $('#sign-up-form').hide()
  $('#auth-message-sign-in').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#auth-message-password-change').show()
  $('.container').show()
  $('#get-all-games').show()
  $('#game-message-get-all-games').hide()
  $('#game-message-status-game').hide()
  $('#sign-out-form').show()
  $('#auth-message-sign-out').hide()
}

const startGameFailure = function () {
  ('#game-message-status-game').text('Create A New Game Failed')
}

const getAllGamesSuccess = function (res) {
  store.game = res.game
  $('#game-message-get-all-games').show()
  $('#game-message-get-all-games').text(`The number of the game played: ${res.games.length}`)
}

const getAllGamesFailure = function () {
  $('#game-message-get-all-games').show()
  $('#game-message-get-all-games').text('Get Game Failed')
}

const onBoxClickSuccess = function (res) {
  store.game = res.game
}

const onBoxClickFailure = function () {
  $('#game-message-status-game').text('Update Game Failed')
}

module.exports = {
  startGameSuccess: startGameSuccess,
  startGameFailure: startGameFailure,
  getAllGamesSuccess: getAllGamesSuccess,
  getAllGamesFailure: getAllGamesFailure,
  onBoxClickSuccess: onBoxClickSuccess,
  onBoxClickFailure: onBoxClickFailure

}
