const db = require('../../config/mongoose')
const Expense = require('../expense')
// const seedData = require('./expense.json')
const { recordSeed } = require('./expense.json')

db.once('open', () => {
  Expense.create(recordSeed)
    .then(() => {
      console.log('record seed data create done!')
      return db.close()
    })
    .then(() => {
      console.log('database connection close.')
    })
  // seedData.results.forEach((item) => {
  //   Expense.create({
  //     name: item.name,
  //     date: item.date,
  //     amount: item.amount,
  //     category: item.category
  //   })
  // })
  // console.log('Seed data created done! Ctrl+C to Exit.')
})