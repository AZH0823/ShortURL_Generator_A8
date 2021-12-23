const express = require('express')
const router = express.Router()
const URL = require("../../models/URL_todo")
const generateCode = require('../../generateCode')


// 輸入相同網址時，產生一樣的縮址。
// 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者


router.post('/', (req, res) => {
  // console.log("Enter Convert URL")
  const inputURL = req.body.url //取得使用者所填寫的網址
  const shortURL = generateCode(5)
  // console.log('Post info(inputURL):', inputURL)
  // 1.尋找有無同筆資料
  URL.findOne({ originalURL: inputURL })
    .lean()
    .then(urlData => {
      if (urlData) {
        console.log('Same')
        return urlData
      }
      else {
        console.log("create Seed")
        return URL.create({ shortURL, originalURL: inputURL })
      }
      // return urlData
    })
    .then(data => {
      // console.log(data.shortURL)
      res.render('finsh', { shortURL: data.shortURL, localhost: req.headers.origin, originalURL: inputURL })


    })
    .catch(error => console.error(error))


})



module.exports = router