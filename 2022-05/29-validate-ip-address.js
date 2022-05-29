/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const arr = queryIP.split(/\.|\:/)
  if (validIPv4(arr)) {
    return 'IPv4'
  } else if (validIpv6(arr)) {
    return 'IPv6'
  } else {
    return 'Neither'
  }
};

const validIPv4 = function (a) {
  if (a.length !== 4) {
    return false
  }
  for (let i = 0; i < 4; i++){
    if (a[i].length < 1 || a[i].length > 3) {
      return false
    }
    if (a[i].length > 1 && a[i][0] === '0') {
      return false
    }
    for (let j = 0; j < a[i].length; j++) {
      const n = a[i].charCodeAt(j)
      if (n < '0'.charCodeAt() || n > '9'.charCodeAt()) {
        return false
      }
    }
    const n = Number(a[i])
    if (n < 0 || n > 255) {
      return false
    }
  }
  return true
}

const validIpv6 = function (a) {
  if (a.length !== 8) {
    return false
  }
  for (let i = 0; i < 8; i++){
    if (a[i].length < 1 || a[i].length > 4) {
      return false
    }
    for (let j = 0; j < a[i].length; j++) {
      const n = a[i].charCodeAt(j)
      if (!((n >= '0'.charCodeAt() && n <= '9'.charCodeAt()) || (n >= 'a'.charCodeAt() && n <= 'f'.charCodeAt()) || (n >= 'A'.charCodeAt() && n <= 'F'.charCodeAt()))) {
        return false
      }
    }
  }
  return true
}

console.log(validIPAddress("172.16.254.1"))
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("192.168.1.0"))
console.log(validIPAddress("192.168.1.00"))
console.log(validIPAddress("192.168.01.1"))
console.log(validIPAddress("192.168@1.1"))
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"))
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"))

