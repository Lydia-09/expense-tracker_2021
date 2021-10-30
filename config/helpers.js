module.exports = {
  // 設定日期格式helper
  dateFormate: function (date) {
    return date.toJSON().substring(0, 10)
  }
}