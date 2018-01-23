console.log = (function (fn) {
  return function () {
    var arr = Array.from(arguments)
    arr.unshift('[CCAS]')
    fn.apply(window, arr)
  }
})(console.log)

console.error = (function (fn) {
  return function () {
    var arr = Array.from(arguments)
    arr.unshift('[CCAS]')
    fn.apply(window, arr)
  }
})(console.error)

console.info = (function (fn) {
  return function () {
    var arr = Array.from(arguments)
    arr.unshift('[CCAS]')
    fn.apply(window, arr)
  }
})(console.info)
