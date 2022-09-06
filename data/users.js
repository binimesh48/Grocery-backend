const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Binimesh',
    email: 'binimesh12@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

module.exports = users
