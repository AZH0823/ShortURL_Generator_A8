// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const finsh = require('./modules/finsh')

router.use('/', home)
router.use('/finsh', finsh)


// 匯出路由器
module.exports = router