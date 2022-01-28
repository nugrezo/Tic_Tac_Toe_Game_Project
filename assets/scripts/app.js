'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./auth/api')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// document ready folder filled for each submit and click actions.
$(() => {
  $('#game-nav-bar').hide()
  $('#sign-up-form').hide()
  $('#dont-have-account-yet').on("click", function (event) {
    event.preventDefault()
    $('#sign-up-form').show()
    $('#sign-in-form').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignUpForm)
  $('#sign-in-form').on('submit', authEvents.onSignInForm)
  $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', gameEvents.onStartGame)
  $('#get-all-games').on('click', gameEvents.onGetAllGames)
  $('.box').on('click', gameEvents.onBoxClick)
})
