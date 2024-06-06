// let age = 15
// if (age >= 17) { // 21 lebih besar dari 17 jadi true
//     console.log('You Can Now Create an ID Card')
// } 

// else {
//     console.log ("You are Not old enough to create an ID Card")
// }

// let kondisi = "LaPaR"

// if(kondisi.toLowerCase()== "laPar".toLowerCase()) {

//     console.log ("Makan Bang")
// } 

// else {
//     console.log ("Jangan Makan Bang")
// }

let grade = "B"

if (grade == "A") {
    console.log ("Excellent Result!")
}

else if (grade == "B") {
    console.log("Great Result!")
}

else if (grade == "C") {
    console.log ("Average Result")
}

else {
    console.log ("invalid Grade!")
}

// switch (grade) {
//     case "A":
//         console.log ("Excellent Result!")
//         break
//     case "B":
//         console.log ("Great Result!")
//         break
//     case "C":
//         console.log ("Average Result!")
//         break
//     default:
//         console.log ("Invalid Result!")
//         break
// }

// console.log("1"*"10")
// console.log(10*"a")

let ganteng = true
let kaya = false

// if (ganteng&&kaya) {
//     console.log("Jadian")
// }

// else {
//     console.log("Temenan")
// }

if (!ganteng == kaya) {
    console.log ("Jadian")}

else {
    console.log("Temenan")}

console.log(ganteng || kaya ? "Jadian" : "Temenan")

const str = "JavaScript"
console.log(str == "JavaScript" ? "JavaScript" : "Not JavaScript")

console.log(grade == "A"?"Excellent" : grade == "B"? "Great" : "Invalid")