const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const Category = require('../../models/category')

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
    category: {categoryId: 'asc'}
  }
  // 提供 boolean 資訊給 handlebars helper, 設定 sort 選項
  const sort = sortValueString ? { [sortValueString]: true } : { 'id': true }

  Expense.find()
    .lean()
    .populate('categoryId')
    .sort(sortOption[sortValueString]) 
    .then(expenses => res.render('index', { expenses, sort }))
    .catch(error => console.error(error))
})

// filter
router.get('/filter', async (req, res) => {
  const category = req.query.category
  const filteredCategory = (req.query.category === '全部') ? '' : await Category.findOne({ name: req.query.category }).lean()
  const filter = (filteredCategory === '') ? { categoryId } : { categoryId: filteredCategory._id }
  Expense.find(filter)
    .lean()
    .populate('categoryId')
    .then(expenses => res.render('index', { expenses, category }))
    .catch(error => console.error(error))
})

module.exports = router