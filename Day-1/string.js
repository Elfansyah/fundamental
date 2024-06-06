let data = "Hello Purwadhika"
let dataUpper = data.toUpperCase(). replace("O", "A")
let dataLower = data.toLowerCase(). repeat(2)

console.log (data)
console.log (dataUpper)
console.log(dataLower)
console.log(data.charAt(4))
console.log(data.search("o"))
console.log(data.replaceAll("a", "i"))

const message = `Hello Word ${data}`
let message2 = "Hello Word " + data
let message3 = "Hello Word ".concat(data)

console.log(message)
console.log(message2)
console.log(message3)