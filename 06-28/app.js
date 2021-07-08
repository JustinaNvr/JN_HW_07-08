// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.

let user = {
    user1: 'Mantas',
    use1: 200,
    user2: 'Paulius',
    use2: 300,
    user3: 'Mindaugas',
    use3: 300,
};

// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.

console.log(`${user.user1} - ${user.use1} EU atlyginimas.`);
console.log(`${user.user2} - ${user.use2} EU atlyginimas.`);
console.log(`${user.user3} - ${user.use3} EU atlyginimas.`);

let users = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
}

for(let key in users){
    console.log(`${key} - ${users[key]} EU atlyginimas.`)
}