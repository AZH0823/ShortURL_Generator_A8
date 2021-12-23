const express = require('express')
const router = express.Router()
const URL = require("../../models/URL_todo")

router.get('/', (req, res) => {
  console.log(req.params)
  console.log(req.body)
  res.render('index')

})

//將短網址導向原本網址
router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  console.log("短網址五碼 : " + shortURL)

  return URL.findOne({ shortURL })
    .lean()
    .then(data => {
      // console.log(data)
      res.redirect(data.originalURL)
    })

    .catch(error => console.log(error))
})


module.exports = router