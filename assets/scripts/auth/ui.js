
const store = require('./../store')

const signUpSuccess = function (res) {
  console.log('sign up success')
  $('#message').text('Thanks for Siging up ' + res.user.email + ' You can Sign In Now')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Try again.')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#message').text('Thanks for Signing in ' + res.user.email + ' Please Change Password Now')
  $('#sign-in-form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Try again.')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#message').text('Password changed! ' + ' You can Start Playing Now')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#start-game').show()
  $('#message1').hide()
  $('#whoseTurn').text('')
}

const changePasswordFailure = function (res) {
  $('#message').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#message').text('Sign out success')
  $('#sign-out-form').trigger('reset')
  $('#start-game').hide()
  $('#sign-out-form').hide()
  $('#get-all-games').hide()
  $('.container').hide()
  $('#message1').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').show()
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
