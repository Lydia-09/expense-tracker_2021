// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()

// 載入 mongoose
const mongoose = require('mongoose') 
require('./config/mongoose')

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hello world')
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
