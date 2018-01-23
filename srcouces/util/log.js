export function log () {
  console.log(arguments)
}

export function error () {
  console.error(arguments)
}

export function info () {
  console.info(arguments)
}

window.log = log
window.error = error
window.info = info
