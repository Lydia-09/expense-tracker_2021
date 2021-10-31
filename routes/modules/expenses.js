const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then( category => res.render('new', { category }))
})

router.post('/', (req, res) => {
  return Category.find()
    .lean()
    .then(categories => {
      categories.forEach(category => {
        //新增 expense 的 categoryId 要和 category 資料庫裡的 id 搭配
        if (category.name === req.body.category) req.body.categoryId = category._id
      })
      Expense.create(req.body)
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .lean()
    .then(expense => res.render('detail', { expense }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .lean()
    .populate('categoryId')
    .then(expense => res.render('edit', { expense }))
    .catch(error => console.log(error))
})

// 修改消費紀錄
router.put('/:id', (req, res) => {
  const _id = req.params.id
  
  return Category.find()
  .lean()
  .then(categories => {
     categories.forEach(category => {
       // 修改 expense 的 categoryId 要和 category 資料庫裡的 id 搭配
       if(category.name === req.body.category) req.body.categoryId = category._id
     })
    Expense.findOne({ _id })
      .then(expense => {
        //確認 expense 的物件跟 req.body 的物件屬性相同，才能夠覆寫資料
       expense = Object.assign(expense, req.body)
        return expense.save()
      })
      .then(() => res.redirect(`/expenses/${_id}`))
      .catch((error) => console.log(error))
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Expense.findByIdAndDelete(id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router