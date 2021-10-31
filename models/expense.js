const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  // 加入關聯設定
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Expense', expenseSchema)