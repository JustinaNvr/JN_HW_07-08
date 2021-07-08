
let working = 1761463;
let budget = 8487300000;

let salary = prompt('Įveskite bazinio užmokesčio dydį');

// keliamos sąlygos, kad išvengti biudžeto viršijimo ir neteisingų duomenų įvedimo
if (salary > 4818.5)
{
    alert('Biudžetas viršijamas');
    location.reload();
}

if (isNaN(salary))
{
    alert('KLAIDA. Vesti skaitmenis');
    location.reload();
}

let proc = (100*salary*working/budget).toFixed(2) + '%';



console.log('Dalis, kiek bazinis mokestis sudaro Lietuvos biudžeto:')
console.log(proc);



// Spaudinama informacija į puslapį
document.write('Darbingi žmonės ', working);
document.write('<br>');
document.write('2017 m. Lietuvos biudžetas: ', budget, ' €');
document.write('<br>');
document.write('Bazinis darbingo žmogaus užmokesčio dydis: ', salary, ' €');
document.write('<br>');
document.write('Dalis, kiek bazinis mokestis sudaro Lietuvos biudžeto: ',proc);

