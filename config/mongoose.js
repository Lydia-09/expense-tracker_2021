const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense-tracker')

// 設定:資料庫連線
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db