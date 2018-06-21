/**
 * Created by zhuzheng on 2017/9/22.
 */
function setScreen (w, h, id) {
  let bodyCliWidth = document.body.clientWidth
  let bodyCliHeight = document.body.clientHeight
  let screenWrapDom = document.getElementById(id)
  let width = w || 1920
  let height = h || 1080
  let originPercent = width / height
  let percent = bodyCliWidth / bodyCliHeight
  screenWrapDom.style.width = width + 'px' // 初始化dom宽
  screenWrapDom.style.height = height + 'px' // 初始化dom高
  if (percent > originPercent) { // 屏幕比较宽
    screenWrapDom.style.cssText += 'transform:scale(' + bodyCliHeight / height + ');' +
      'transform-origin:0px 0px 0px;' +
      'position: absolute;' +
      'top:0px;' +
      'left:' + (bodyCliWidth - (bodyCliHeight * originPercent)) / 2 + 'px;'
  } else { // 屏幕比较窄
    screenWrapDom.style.cssText += 'transform:scale(' + bodyCliWidth / width + ');' +
      'transform-origin:0px 0px 0px;' +
      'position: absolute;' +
      'top:' + (bodyCliHeight - (bodyCliWidth / originPercent)) / 2 + 'px;' +
      'left:0'
  }
  window.addEventListener('resize', () => {
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      window.location.reload()
    }, 300)
  })
}

export default setScreen
