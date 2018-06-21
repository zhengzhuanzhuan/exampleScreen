// 数字逗号,保留两位小数点
function toInt (num) {
  num = (num || 0).toFixed(2)
  num = (num || 0).toString()
  let point = num.slice(num.length - 3, num.length)
  num = parseInt(num)
  num = (num || 0).toString()
  let result = ''
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) { result = num + result }
  return (result + point)
}

function chNum (s) {
  if (s === 0) {
    return 0
  } else if (s === null || !s) {
    return '--'
  } else {
    s = Math.round(parseFloat((s + '').replace(/[^\d\.-]/g, ''))) + ''
    let l = s.split('.')[0].split('').reverse()
    let t = ''
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    return t.split('').reverse().join('')
  }
}
// 格式化日期
function dateParse (dt, fmt) {
  if (typeof dt === 'string') {
    dt = new Date(dt)
  } else {
    dt = new Date(dt + '')
  }
  var o = {
    'y+': dt.getFullYear(),
    'M+': dt.getMonth() + 1,                 // 月份
    'd+': dt.getDate(),                    // 日
    'h+': dt.getHours(),                   // 小时
    'm+': dt.getMinutes(),                 // 分
    's+': dt.getSeconds(),                 // 秒
    'q+': Math.floor((dt.getMonth() + 3) / 3), // 季度
    'S+': dt.getMilliseconds()             // 毫秒
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      if (k === 'y+') {
        fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length))
      } else if (k === 'S+') {
        var lens = RegExp.$1.length
        lens = lens === 1 ? 3 : lens
        fmt = fmt.replace(RegExp.$1, ('00' + o[k]).substr(('' + o[k]).length - 1, lens))
      } else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
  }
  return fmt
}

export default { toInt, chNum, dateParse }
