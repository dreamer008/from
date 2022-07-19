// 填表日期
let date = new Date()
new Rolldate({
  el: '#dateSelectorOne',
  format: 'YYYY-MM-DD',
  beginYear: 2000,
})
// 出生日期
new Rolldate({
  el: '#dateBirthday',
  format: 'YYYY-MM-DD',
  beginYear: 1950,
  endYear: `${date.getFullYear() - 18}`,
})
// 到岗时间
new Rolldate({
  el: '#toWork',
  format: 'YYYY-MM-DD',
  beginYear: 2022,
})
