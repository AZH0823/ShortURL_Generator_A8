const urlUTM = require("../urlUTM")
const db = require('../../configs/mongoose')

db.once('open', () => {
  console.log('create Seeder')
  urlUTM.create({
    shortURL: 'http://www.google.com',
    originalURL: 'abcde'
  })
})
