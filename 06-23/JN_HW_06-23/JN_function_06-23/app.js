// Parašykite funkciją kuri grąžina stulpelį su lyginiais skaičiais nuo x iki x.

function even(arr) {
    res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log('FOR even: ', arr[i]);
        }
    }
    return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13];

even(arr);

// ///////// per paskaitą sužinota teisinga funkcija
// function evenNum(start, end) {
//     let result = [];
//     for (let i = start; i < end; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// };
// ////////////////

// Parašykite funkciją kuri patikrina ar duotas skaičius yra daugiau nei 3 ir mažiau nei 10


function moreLess(x) {
    res = [];
    if (x > 3 && x < 10) {
        console.log('3 < ', x, '< 10');
    }
    else {
        console.log('X = ', x);
    }
    return res;
}
let x = prompt('Įveskite skaičių');
moreLess(x);

// Parašykite funkciją kuri grąžina teigiamų masyvo skaičių sumą

function evenSum(arr) {
    res = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
                    sum += arr[i];
        }
    }
    console.log('FOR Even Sum: ', sum);
    return res;
}

evenSum(arr);

///////////
// function evenNumSum(arr = []) {
//     let sum = 0;
//     if (Array.isArray(arr)){
//         for (let value of arr){
//
//         }
//
//     }
// }