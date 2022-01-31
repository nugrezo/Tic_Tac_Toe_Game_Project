
const store = require('./../store')

const signUpSuccess = function (res) {
  $('#sign-in-now').text('Please sign in now with the email and password you typed in')
  $('#sign-in-now').css("color", "green")
  setTimeout(() => {
      $('#sign-in-now').text('')
  }, 5000)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#auth-message-sign-out').hide()
  $('#sign-in-form').show()
  $('#dont-have-account-yet').hide()
}

const signUpFailure = function () {
  $('#auth-message-sign-up').text('Try again.')
  $('#auth-message-sign-up').css("color", "red" )
  setTimeout(() => {
    $('#auth-message-sign-up').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#game-nav-bar').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const signInFailure = function () {
  $('#auth-message-sign-in').text('Try again.')
  $('#auth-message-sign-in').css("color", "red")
setTimeout(() => {
      $('#auth-message-sign-in').text('')
  }, 2000)
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#change-password-message').text('Password Changed!')
  $('#change-password-form').trigger('reset')
  $('#change-password-message').css('color', 'green')
}

const changePasswordFailure = function (res) {
  $('#change-password-message').text('Try again.')
  $('#change-password-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#game-nav-bar').hide()
  $('#sign-up-form').hide()
  $('#dont-have-account-yet').show()
  $('#sign-in-form').show()
  $('.container').hide()
  $('#game-status-message').hide()
  
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
