'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  $('#change-password-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUpForm)
  $('#sign-in-form').on('submit', authEvents.onSignInForm)
  $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
})
