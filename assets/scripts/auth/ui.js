
const store = require('./../store')

const signUpSuccess = function (res) {
  $('#auth-message-sign-up').show()
  $('#auth-message-sign-up').text('Thanks for Siging up ' + res.user.email + ' You can Sign In Now')
  $('#sign-up-form').trigger('reset')
  $('#sign-out-form').hide()
  $('#auth-message-sign-out').hide()
}

const signUpFailure = function () {
  $('#auth-message-sign-up').text('Try again.')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#auth-message-sign-in').show()
  $('#auth-message-sign-in').text('Thanks for Signing in ' + res.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#start-game').show()
  $('#auth-message-sign-up').show()
  $('#auth-message-sign-up').text('')
  $('#sign-out-form').show()
  $('#auth-message-sign-out').hide()
}

const signInFailure = function () {
  $('#auth-message-sign-in').text('Try again.')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#auth-message-password-change').text('Password Changed!')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (res) {
  $('#auth-message-password-change').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#auth-message-sign-in').hide()
  $('#auth-message-sign-out').show()
  $('#auth-message-sign-out').text('You`ve Successfully signed out')
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#auth-message-password-change').hide()
  $('#get-all-games').hide()
  $('#game-message-get-all-games').hide()
  $('#start-game').hide()
  $('.container').hide()
  $('#game-message-status-game').hide()
  $('#message-sign-out').show()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#auth-message-password-change').text('')
}

const signOutFailure = function (res) {
  $('#auth-message-sign-out').show()
  $('#auth-message-sign-out').text('Try again.')
  $('#sign-out-form').trigger('reset')
}
module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
