function $(ele) {
  return document.querySelector(ele)
}

// 性别
let gender = [
  {
    text: '男',
  },
  {
    text: '女',
  },
]
var picker1 = new Picker({
  data: [gender],
})
picker1.on('picker.select', function (selectedVal, selectedIndex) {
  $('#gender').value = gender[selectedIndex[0]].text
})
$('#gender').addEventListener('click', function () {
  picker1.show()
})
// 婚否
let marriage = [
  {
    text: '已婚',
  },
  {
    text: '未婚',
  },
]
var picker2 = new Picker({
  data: [marriage],
})
picker2.on('picker.select', function (selectedVal, selectedIndex) {
  $('#marriage').value = marriage[selectedIndex[0]].text
})
$('#marriage').addEventListener('click', function () {
  picker2.show()
})
