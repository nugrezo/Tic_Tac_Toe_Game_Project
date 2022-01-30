'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require("./auth/events")
const gameEvents = require("./game/events")
const api = require("./game/api")
const store = require("./store")
// const gameEvents = require("./game/events")

// document ready folder filled for each submit and click actions.

$(() => {
  $('#game-nav-bar').hide()
  $('#sign-up-form').hide()
  $('#dont-have-account-yet').on("click", function (event) {
    event.preventDefault()
    $('#sign-up-form').show()
    $('#sign-in-form').hide()
  })
  $('#game-board').hide()
  $('#whose-turn-message').hide()
  $('#have-account').on("click", function (event) {
    event.preventDefault()
    console.log("button is working")
    $('#sign-in-form').show()
    $('#sign-up-form').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignUpForm)
  $('#sign-in-form').on('submit', authEvents.onSignInForm)
  $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click',gameEvents.startGameEvent)
  })

