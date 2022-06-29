const os = require('os')

// info on current user
const user = os.userInfo()
console.log(user)

// method to return the system uptime

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
