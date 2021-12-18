const express = require('express')
const exhbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')


const port = 3100
const app = express()
const router = require('./routes')
const generateUTM = require("./generateUTM")
require('./config/mongoose')

// setting static files
app.use(express.static('public'))
app.engine('hbs', exhbs(
  {
    defaultLayouts: 'main',
    extname: 'hbs'
  }
))

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(router)






app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})


