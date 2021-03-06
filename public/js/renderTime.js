module.exports = Date.prototype.yyyymmdd = function (joinSting = '') {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();
  return [this.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join(joinSting);
}