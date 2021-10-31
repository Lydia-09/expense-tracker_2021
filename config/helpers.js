module.exports = {
  // 設定日期格式 helper
  dateFormate: function (date) {
    return date.toJSON().substring(0, 10)
  },
  // 設定比較是否相等的 helper
  isSelected: (a, b) => {
    if (a === b) return 'selected'
  },
  // 設定加總的 helper
  totalAmount: (expenses) => {
    let totalAmount = 0
    expenses.forEach(expense => {
      totalAmount += Number(expense.amount)
    })
    return totalAmount
  }
}