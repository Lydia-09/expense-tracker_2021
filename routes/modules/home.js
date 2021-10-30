const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/', (req, res) => {
  // 取得排序選項
  const sortValueString = req.query.sort
  // 排序選項對應查詢
  const sortOption = {
    amount: {amount: 'desc'},
    lessAmount: {amount: 'asc'},
    newDate: {date: 'desc'},
    oldDate: {date: 'asc'},
    name: {name: 'asc'},
    category: {category: 'asc'}
  }
  // 提供boolean資訊給handlebars helper, 設定sort選項
  const sort = sortValueString ? { [sortValueString]: true } : { 'id': true }

  Expense.find( )
    .lean()
    .sort(sortOption[sortValueString]) 
    .then(expenses => res.render('index',  { expenses, sort }))
    .catch(error => console.error(error))
})

module.exports = router