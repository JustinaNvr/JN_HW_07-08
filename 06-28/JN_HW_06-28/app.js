// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.

let obj = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna'
};


for(let key in obj){
    console.log(`1 UŽD.: ${key} : ${obj[key]}`)
};

// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
let users = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
};

// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.

for(let key in users){
    console.log(`2 UŽD.: ${key} - ${users[key]} EU atlyginimas.`)
};

// Sukurkite objektą su savaitės dienomis.
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios
// // (1 -> pirmadienis ir t.t.).
let week = {
    1: 'pirmadienis',
    2: 'antradienis',
    3: 'trečiadienis',
    4: 'ketvirtadienis',
    5: 'penktadienis',
    6: 'šeštadienis',
    0: 'sekmadienis'
};

// Parodykite dabartinę savaitės dieną.
let date = new Date(),
    today = week[date.getDay()];
console.log('3 UŽD.: ', today);


// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris.
let day = date.getDay();

// Atspausdinkite savaitės dieną naudojant sita kintamajį.

console.log('4 UŽD.: ', week[day]);

// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}.
// Parodykite žodį jQuery.
let obje = {
    js: [
        'jQuery', 'Angular'
    ],
    php: 'hello',
    css: 'world'
};

console.log('5 UŽD.: ', obje.js[0]);

// Sukurkite objektą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai atitinkamai.
let language = {
    lt: [
        'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'
    ],
    en: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
};
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
console.log(`6 UŽD.: Pirmadienis LT kalba: ${language.lt[0]}, Trečiadienis EN kalba: ${language.en[2]}`);

// Sukurkite kintamsios lang ir day (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną

let lang = 'en';

    now = language[lang][day-1];
console.log('7 UŽD.: ', now);
//
// function getLangName() {
//     let langs = Object.keys(language);
//     return langs[Math.floor(Math.random() * langs.length)];
// }
//
// function getDay(){
//     return Math.floor(Math.random() * 6);
// }
// let langs = getLangName(language);
