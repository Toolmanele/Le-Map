// 已知两个范围 // 直接求了, 太直接了,
function linearMap(range, domain) {
  function value(r) {
    var x1 = range[0]
    var x2 = range[1]
    var y1 = domain[0]
    var y2 = domain[1]
    // 求 r1 在 x1,x2 什么位置
    if (x1 !== x2) {
      var k = (r - x1) / (x2 - x1)
      return k * (y2 - y1) + y1
    }
  }
  // 我们也可以很方便的求反
  value.invert = function () {
    return linearMap(domain, range)
  }
  return value
}
