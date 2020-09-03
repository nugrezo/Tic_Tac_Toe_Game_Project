
const store = require('./../store')

const signUpSuccess = function (res) {
  console.log('sign up success')
  $('#auth-message-sign-up').text('Thanks for Siging up ' + res.user.email + ' You can Sign In Now')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#auth-message-sign-up').text('Try again.')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#auth-message-sign-in').text('Thanks for Signing in ' + res.user.email + ' Please Change Password Now')
  $('#sign-in-form').trigger('reset')
  $('.form1').hide()
  $('.form2').hide()
  $('#start-game').show()
}

const signInFailure = function () {
  $('#auth-message-sign-in').text('Try again.')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#auth-message-password-change').text('Password Successfully Changed!')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function (res) {
  $('##auth-message-password-change').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#auth-message-sign-out').text('Sign out success')
  $('#sign-out-form').trigger('reset')
}

const signOutFailure = function (res) {
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
