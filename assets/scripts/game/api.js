
const config = require('../config')
const store = require('../store')

const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const getAllGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const updateGame = function () {
  console.log('boxClick ran')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: '',
          value: ''
        },
        over: false
      }
    }
  })
}

module.exports = {
  startGame: startGame,
  getAllGames: getAllGames,
  updateGame: updateGame

}
