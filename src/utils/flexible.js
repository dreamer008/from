;(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth //获取设备的宽度
      if (!clientWidth) return
      if (clientWidth >= 750) {
        //宽度>750
        docEl.style.fontSize = '100px' //根元素
      } else {
        //移动端的适配
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
      }
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
