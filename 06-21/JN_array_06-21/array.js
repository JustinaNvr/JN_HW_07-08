// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arr1 = [
    'a', 'b', 'c'
];

console.log(arr1);

// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(arr1[0], arr1[1], arr1[2]);

// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let arr2 = [
        'a', 'b', 'c', 'd',
];

console.log(arr2[0] + arr2[1], arr2[2] + arr2[3]);

// Sukurkite masyvą su elementais 2, 5, 3, 9.
let arr3 = [
    2, 5, 3, 9
];

// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
let mul1 = arr3[0]*arr3[1];
let mul2 = arr3[2]*arr3[3];
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let result = mul1 + mul2;

console.log(result);
// Daugialypiai masyvai
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let arr4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7,8,9]
];

console.log(arr4[1][0]);

// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arr5 = [
    1, 2, 3
];

let arr6 = [
    4, 5, 6
];

console.log(arr5.concat(arr6));
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.

console.log(arr5.reverse());

// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
arr5.unshift(-1, -2, -3);
arr5.push(4, 5, 6);

console.log(arr5);

// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arr7 = [
    'html', 'css', 'js'
];

console.log(arr7[0], arr7[2]);

// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let arr8 =[
    3, 4, 1, 2, 7
];

console.log(arr8.sort());

// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let arr9 = [
    1, 2, 3, 4, 5, 6
];

console.log(arr9.slice(0, 3));