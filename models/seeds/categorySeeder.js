const db = require('../../config/mongoose')
const Category = require('../category')
const { categorySeed } = require('./category.json')

db.once('open', () => {
  Category.create(categorySeed)
    .then(() => {
      console.log('category seed data create done!')
      return db.close()
    })
    .then(() => {
      console.log('database connection close.')
    })
})
