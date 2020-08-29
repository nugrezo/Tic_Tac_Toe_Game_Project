
const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGame: createGame
}
