const mongoose = require('mongoose')
const mongooseURL = 'mongodb://localhost/toUTMlist'

mongoose.connect(mongooseURL)

const db = mongoose.connection
db.on('error', () => {
  console.log('mogoose error to fail connect')
})
db.on('open', () => {
  console.log('mogoose is conect sucessful')
})

module.exports = db