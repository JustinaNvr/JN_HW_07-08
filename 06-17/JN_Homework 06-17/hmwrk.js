
// Sukurkite num kintamąjį ir priskirkite jam reikšmę 3. Parodykite šio kintamojo reikšmę ekrane, naudodami alert funkciją.
const num = 3;
alert(num);

// Sukurkite kintamuosius a = 10 ir b = 2. Ekrane parodykite jų sumą, skirtumą, daugybos ir padalijimo rezultatus.
let a = 10;
let b = 2;

// let sum = a + b;
// let dif = a - b;
// let multi = a*b;
// let divide = a/b;

document.write('A + B = ', a+b);
document.write('<br>');
document.write('A - B = ', a-b);
document.write('<br>');
document.write('A * B = ', a*b);
document.write('<br>');
document.write('A / B = ', a/b);
document.write('<br>');


// Sukurkite kintamuosius c = 15 ir d = 2. Susumuokite juos ir priskirkite kintamajam result. Parodykite result kintamojo vertę.
let c = 15;
let d = 2;

let result = 15+2;
console.log(result);

// Sukurkite kintamuosius a = 17 ir b = 10. Atimkite kintamąjį b iš a ir priskirkite rezultatą kintamajam c. Tada sukurkite kintamąjį d, priskirkite jam reikšmę 7. Sudėkite kintamuosius c ir d ir priskirkite rezultatą kintamajam result.
let aa = 17;
let bb = 10;
let cc = bb-aa;
let dd = 7;
let res = cc + dd;

console.log(res);

// Sukurkite kintamąjį str ir priskirkite jam „Hello World!” reikšmę. Parodykite šio kintamojo reikšmę ekrane.
let str = 'Hello World!';
document.write(str);

// Sukurkite kintamuosius str1 = ‘Hello’ ir str2 = ‘World!’. Naudodami šiuos kintamuosius parodykite frazę „Hello World!“.
let str1 = 'Hello';
let str2 = 'World!';

console.log(str1 + ' ' + str2);

// Sukurkite kintamąjį name ir priskirkite jam savo vardą. Parodykite frazę „Hello, %name%!“.
let name = 'Justina';
console.log('Hello, ' + name + '!');

// Sukurkite kintamąjį age ir priskirkite jam savo amžių. Parodykite ‘I’m %age% old!’
let age = 24;
console.log('I`m ' + age + ' years old!');

// Paklauskite vartotojo vardo naudodamiesi prompt metodais. Su alert parodykite pranešimą „Your name %name%“ kur %name% - įvestas vardas.
let names = prompt('What is your name?');
alert('Your name is ' + names);