// For and While
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.

// for (let i = 1; i <= 100; i++) {
//     console.log('for: ', i)
// };

// let i = 1;
// while (i <= 100) {
//     console.log('while: ', i);
//     i++
// };

// let i = 1;
// do {
//     console.log('doWhile: ', i);
//     i++
// } while (i <= 100);

// Atspausdinkite skaičių stulpelį nuo 11 iki 33.

// for (let i = 11; i <= 33; i++) {
//     console.log('FOR 11-33: ', i)
// };

// let i = 11;
// while (i <= 33) {
//     console.log('WHILE 11-33: ', i);
//     i++
// };

// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//         console. log('FOR even: ', i);
//     }
// };

// let i = 0;
// while (i <= 100) {
//     // console.log('while: ', i);
//     if(i % 2 === 0){
//         console. log('WHILE even: ', i);
//     }
//     i++
// };

// Naudodami ciklą parodykite sumą nuo 1 iki 100.

// let sum = 0;
//
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
//
// console.log('FOR sum: ' + sum);
//
// let sum = 0;
// let i = 1;
//
// while (i<=100) {
//     sum += i;
//     i++;
// }
//
// console.log('WHILE sum: ' + sum);
//

// For ir masyvai
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.

let arr = [
    1, 2, 3, 4, 5
];

// for (let i = 0; i < arr.length; i++) {
//     document.write('FOR: ', arr[i] + ' ')
// };

// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log('FOR sum: ' + sum);