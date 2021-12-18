const express = require('express')
const router = express.Router()

router.post('/covert', (req, res) => {
  console.log("Enter Convert URL")
  wait(5000)
  res.redirect('/finsh')
})

router.get('/', (req, res) => {
  console.log('Covert Sucessful')
  res.render('finsh')
})


function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}


module.exports = router