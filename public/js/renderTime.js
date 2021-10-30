// let date = renderTime(json.AddDateTime)
// function renderTime(date){
//   let da = new Date(parseInt(date.replace("/Date(","").replace(")/","").split("+")[0]))
//   return da.getFullYear()+"-"+ (da.getMonth()+1)+"-" + da.getDate()+" " +da.getHours()+":"+da.getSeconds()+":"+da.getMinutes()
// }

// module.exports = date
module.exports = Date.prototype.yyyymmdd = function (joinSting = '') {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();
  return [this.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join(joinSting);
} 