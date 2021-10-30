const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .lean()
    .then((expense) => res.render('detail', { expense }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .lean()
    .then((expense) => res.render('edit', { expense }))
    .catch(error => console.log(error))
})

router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  const { name, date, amount} = req.body
  return Expense.findById(id)
    .then(expense => {
      expense.name = name
      expense.date = date
      expense.amount = amount
      return expense.save()
    })
    .then(()=> res.redirect(`/expenses/${id}`))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { name, date, amount} = req.body
  return Expense.create({  name, date, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router