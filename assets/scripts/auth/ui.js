
const store = require('../store.js')

const onSignUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#message').text('Thanks for signing up' + response.user.email)
  $('sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed. Try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in' + response.user.email)
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-in').hide()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed try again')
}
const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').hide()
}

const onChangePasswordFailure = function () {
  $('#message').text('Error on change password')
}

const onSignOutSuccess = function (response) {
  $('#sign-out').text('Signed out. Thanks for playing')
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
