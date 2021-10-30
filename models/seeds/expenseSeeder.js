const db = require('../../config/mongoose')
const Expense = require('../expense')
const seedData = require('./expense.json')

db.once('open', () => {
  seedData.results.forEach((item) => {
    Expense.create({
      name: item.name,
      date: item.date,
      amount: item.amount
    })
  })
  console.log('Seed data created done! Ctrl+C to Exit.')
})