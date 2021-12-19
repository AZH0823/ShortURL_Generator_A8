const URL_Geneator = require("../URL_todo")
const db = require('../../configs/mongoose')

db.once('open', () => {
  console.log('create Seeder')
  URL_Geneator.create({
    shortURL: 'http://www.google.com',
    originalURL: 'abcde'
  })
})
