export default function(key, value) {
  if (!key) {
    console.log('setItem failed, must have one param or more')
    return
  }
  if (!value) {
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}