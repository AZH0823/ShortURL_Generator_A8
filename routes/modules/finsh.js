const express = require('express')
const router = express.Router()
const URL = require("../../models/URL_todo")
const generateCode = require('../../generateCode')

// 輸入相同網址時，產生一樣的縮址。
// 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者


router.post('/covert', (req, res) => {
  console.log("Enter Convert URL")
  const inputURL = req.body.url //取得使用者所填寫的網址
  let resultURL //儲存該筆最終該筆資料
  // console.log('Post info(inputURL):', inputURL)
  // 1.尋找有無同筆資料
  URL.find()
    .lean()
    .then(urList => {
      let result = urList.find(url => {
        // console.log('find :' + url.originalURL)
        return url.originalURL === inputURL

      })

      const judgment = result || 'noRepeat'
      //---輸入相同網址時，產生一樣的縮址。

      if (judgment !== 'noRepeat') {
        resultURL = result
      } else {
        //2. 無相同URL 則給 網址+5碼英數亂碼        
        shortURL = `http://shortURL/${generateCode(5)}`
        URL.create({ originalURL: inputURL, shortURL: shortURL })
        resultURL = ({ originalURL: inputURL, shortURL: shortURL })
      }
      console.log(resultURL)
      res.render('finsh', { resultURL })
    })
})




module.exports = router