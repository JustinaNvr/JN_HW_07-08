///////////////////DIDELĖS/MAŽOS RAIDĖS
function up(){
    let res = document.getElementById('input').value;
    document.getElementById('input').value = res.toUpperCase();
}
function lo(){
    let res = document.getElementById('input').value;
    document.getElementById('input').value = res.toLowerCase();
}
function upf(){
    let res = document.getElementById('input').value;
    document.getElementById('input').value = res[0].toUpperCase() + res.slice(1);
}
function lof(){
    let res = document.getElementById('input').value;
    document.getElementById('input').value = res[0].toLowerCase() + res.slice(1);
}
///////////////////
///////////////////EMAIL/PHONE NUMBER

// /^[^\s@]+@[^\s@]+$/


// function ValidateEmail(mail)
// {
//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('staticEmail').value))
//     {
//         return (true)
//     }
//     alert("You have entered an invalid email address!")
//     return (false)
// }



///////////////////
///////////////////BLOCK/UNBLOCK
function block(){
    document.getElementById('inputs').disabled = true;
}
function unblock(){
    document.getElementById('inputs').disabled = false;
}
///////////////////
///////////////////CURSOR
function pointer(){
    document.getElementById('lor').style.cursor = 'pointer';
}
function zoom(){
    document.getElementById('lor').style.cursor = 'zoom-in';
}
function wait(){
    document.getElementById('lor').style.cursor = 'wait';
}
///////////////////
///////////////////COLOR
function green(){
    document.getElementById('lor').style.color = 'green';
}
function yellow(){
    document.getElementById('lor').style.color = 'yellow';
}
function red(){
    document.getElementById('lor').style.color = 'red';
}
///////////////////
///////////////////BORDERS
function round(){
    document.getElementById('lor').style.border = '3px solid black';
    document.getElementById('lor').style.borderRadius = '5%';
}
function dotted(){
    document.getElementById('lor').style.border = '3px dotted black';
}
function mixed(){
    document.getElementById('lor').style.border = '3px black';
    document.getElementById('lor').style.borderStyle = 'dotted dashed solid double';
}
///////////////////
///////////////////RESET
function reset(){
    document.getElementById('lor').style = '1px solid dimgrey';
    document.getElementById('lor').style.cursor = 'auto';
}
///////////////////
///////////////////MODAL
// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
