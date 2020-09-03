
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

const getAllGames = function (boxNum, CurrentPlayer) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 'BoxNum',
          value: 'currentPlayer'
        },
        over: false
      }
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  startGame: startGame,
  getAllGames: getAllGames,
  updateGame: updateGame

}
