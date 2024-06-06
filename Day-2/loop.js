// LOOP STATEMENT

// 1. For Loop

// for (let i = 0 ; i <10 ; i++) {
//     console.log ("Hello World")
// }

// for (let i = 0 ; i <10 ; i++) {
//     console.log (`Hello World ke-${i}`)
// }

// for (let i = 0 ; i <10 ; i++) {
//     console.log (i)
// }

// 2. While Loop (CARA KERJA : Sistem akan menganalisa dulu rumusnya, jika tidak sesuai tidak akan jalan)

// let i = 1

// while (i<=0) {
//     console.log ("Hello");
//     i++
// }

// // 3. Do.. While Loop (CARA KERJA : Sistem melakukan dulu baru mikir Sesuai atau ga rumusnya)

// do {
//     console.log ("Hello")
//     i++
// } while (i<=0)

// 4. Break

// while (true) {
//     console.log (i)

//     if (i==10)break
//     1++
// }


for(let i = 1; i <=5; i++) {
    if (i == 3 || i == 4) continue
    console.log(i)
}
