// Sukurkite kintamąjį age ir priskirkite jam savo amžių. Parodykite ‘I’m %age% old!’

let birthdate = 1996;
let today = new Date();
let age = today.getUTCFullYear() - birthdate;

console.log(today.getUTCFullYear());
console.log('I`m ' + age + ' years old!');


let birthday = new Date(1996, 8, 23);
let date = new Date();
let [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];

let age_today = date - birthday;

console.log(year, month, day);
console.log(age_today);