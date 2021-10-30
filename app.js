// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const Expense = require('./models/expense')

// 載入 mongoose
require('./config/mongoose')

const app = express()

// 設定:樣板引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定首頁路由
app.get('/', (req, res) => {
  // res.render('index')
  Expense.find()
    .lean()
    .then(expenses => res.render('index',  {expenses }))
    .catch(error => console.error(error))
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
