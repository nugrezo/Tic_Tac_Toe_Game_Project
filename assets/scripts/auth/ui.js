
const store = require('./../store')

const signUpSuccess = function (res) {
  $('#message').text('Thanks for Siging up ' + res.user.email)
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Try again.')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#message').text('Thanks for Signing in ' + res.user.email)
  $('#change-password-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const signInFailure = function () {
  $('#message').text('Try again.')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#message').text('Password changed!')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (res) {
  $('#message').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#message').text('Sign out success')
  $('#sign-out-form').trigger('reset')
}

const signOutFailure = function (res) {
  $('#message').text('Try again.')
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
