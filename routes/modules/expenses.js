const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const { name, date, amount} = req.body
  return Expense.create({  name, date, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router