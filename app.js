const express = require('express')
const exhbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const port = 3100
const app = express()

app.engine('hbs', exhbs(
  {
    defaultLayouts: 'main',
    extname: 'hbs'
  }
))

app.set('view engine', 'hbs')



app.get('/', (req, res) => {

  res.render('index')

})
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

