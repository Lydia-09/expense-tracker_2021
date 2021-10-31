const db = require('../../config/mongoose')
const Expense = require('../expense')
const Category = require('../category')
const { recordSeed } = require('./expense.json')

db.once('open', async () => {
  try {
    // 取得支出類別，並寫入 recordSeed
    const categoryData = await Category.find().lean().select('name')
    recordSeed.forEach(expense => {
      expense.categoryId = categoryData.find(category => expense.category === category.name)._id  
    })
    await Expense.create(recordSeed)
    console.log('record seed data create done!')
    console.log('database connection close.')
    return process.exit()
  } catch (e) {
    console.warn(e)
  }
})