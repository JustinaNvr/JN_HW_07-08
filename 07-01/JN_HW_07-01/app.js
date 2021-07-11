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
function email(inputtxt){
    let mail = /^[^\s@]+@[^\s@]+$/;
    if (inputtxt.value.match(mail))
    {
        return true;
    }
    else
    {
        alert('Please provide a valid email address');
        return false;
    }
}

function phonenumber(inputtxt){
    let num = /^\d{10}$/;
    if(inputtxt.value.match(num))
    {
        return true;
    }
    else
    {
        alert("Please provide a valid Phone Number");
        return false;
    }
}
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