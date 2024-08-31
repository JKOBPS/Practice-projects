//CALCULA EDAD
let age;
let actualAge = document.getElementById('actualAge');
let result = document.getElementById('result');

function calculator() {
    let birthAge = document.getElementById('birthAge').value;
    let imgCalc = document.getElementById('imgCalculator');
    age = new Date().getFullYear() - birthAge;

    if (birthAge > new Date().getFullYear()) {
        document.getElementById('result').innerHTML = ("Todavía no has nacido.");
        imgCalc.src ="https://live.staticflickr.com/3103/2722043553_5cc6252ce7_b.jpg";
    } else if (birthAge < 1900) {
        result.innerHTML = ("D.E.P.");
        imgCalc.src ="https://i.scdn.co/image/ab67616d0000b273dca767418c717e17c5d23bbf";
    }
    else if (age < 18) {
        result.innerHTML = ("Eres menor de edad.");
        imgCalc.src ="https://www.carteling.com/7370-large_default/prohibida-la-entrada-a-menores-de-edad.jpg";
    }
     else { 
        result.innerHTML = ("Eres mayor de edad.");
        imgCalc.src ="https://previews.123rf.com/images/lafoto/lafoto1502/lafoto150200048/36950899-retrato-de-feliz-hombre-mayor-de-edad-con-una-sonrisa-y-levant%C3%B3-las-manos-hacia-arriba-aislados-en.jpg";
    }
    actualAge.innerHTML = ('La edad actual para la persona que nació en el año ' + birthAge + " es " + age + ' años');
}

/* CALCULADORA 1.0*/
let calculatorResult;
let op1;
let op2;
function values() {
    op1 = document.getElementById('op1').value;
    op2 = document.getElementById('op2').value;
}

function test1 () {
    values();
    calculatorResult = parseFloat(op1) + parseFloat(op2);
}
function test2 () {
    values();
    calculatorResult = (op1) - (op2);
}
function test3 () {
    values();
    calculatorResult = (op1) / (op2);
}
function test4 () {
    values();
    calculatorResult = (op1) * (op2);
}

function calculatorFunction() {
    document.getElementById('calculatorResultText').innerHTML = 'El resultado es: ' + calculatorResult;
}

//ROCK, PAPPER, SICCERS

let piedraOpt = document.getElementById('piedra');
let papelOpt = document.getElementById('papel');
let tijerasOpt = document.getElementById('tijeras');
let pPTTitle = document.getElementById('h3PPT');
let machImg = document.getElementById('machineImg');
let pptClearBtn = document.getElementById('pptClear');
let playBtn = document.getElementById('pptBtn');

let userOption = "";
let machineOption = "";
let numChoise = "";

function random() {
    numChoise = Math.floor(Math.random() * 3);
}
function ranChoise () { 
    random();
    if (numChoise == 0) {
        machineOption = 'piedra'
        machImg.src="https://cdn-icons-png.flaticon.com/512/2491/2491229.png";
    } else if (numChoise == 1) {
        machineOption = 'papel';
        machImg.src="https://cdn-icons-png.flaticon.com/256/1527/1527520.png";
    } else if (numChoise == 2) {
        machineOption = 'tijeras';
        machImg.src="https://static.vecteezy.com/system/resources/thumbnails/012/627/940/small_2x/peace-sign-human-hand-gesture-png.png";
    }
}

function piedra() {
    userOption = 'piedra';
    papelOpt.style.visibility = 'hidden';
    papelOpt.style.position = 'absolute';
    tijerasOpt.style.visibility = 'hidden';
    tijerasOpt.style.position = 'absolute';
}
function papel() {
    userOption = 'papel';
    tijerasOpt.style.visibility = 'hidden';
    piedraOpt.style.visibility = 'hidden';
}
function tijeras() {
    userOption = 'tijeras';
    piedraOpt.style.visibility = 'hidden';
    piedraOpt.style.position = 'absolute';
    papelOpt.style.visibility = 'hidden';
    papelOpt.style.position = 'absolute';
}

function pptMachine() {
    ranChoise();
    if (userOption === "") {
        pPTTitle.innerHTML = 'Elige tu apuesta';
        machImg.src="https://cdn-icons-png.flaticon.com/512/6831/6831874.png";
    } 
    else if (userOption === machineOption) {
        pPTTitle.innerHTML = 'Has empatado';
    } else if ((userOption === 'piedra' && machineOption === 'tijeras') || (userOption === 'papel' && machineOption === 'piedra') || (userOption === 'tijeras' && machineOption === 'papel')) {
        pPTTitle.innerHTML = 'Has ganado';
    } else {
        pPTTitle.innerHTML = 'Has perdido';
    }    
}

function pptOptClear() {
    userOption = "";
    papelOpt.style.visibility = 'visible';
    papelOpt.style.position = 'relative';
    tijerasOpt.style.visibility = 'visible';
    tijerasOpt.style.position = 'relative';
    piedraOpt.style.visibility = 'visible';
    piedraOpt.style.position = 'relative';
    pPTTitle.innerHTML = "Elige la opción con la que jugarás";
    machImg.src="https://cdn-icons-png.flaticon.com/512/6831/6831874.png";
}
//JUEGO ADIVINANZA DE NÚMEROS
//Adv = Adivinanza.
let x = 0;
let y = 0;
let conChoise = 0;
let pistaAdvCont = "";
let userOpt = 0;
let xAdv = document.getElementById('xAdv');
let yAdv = document.getElementById('yAdv');
let btnTryAgain = document.getElementById('tryAgain');
let btnAdv = document.getElementById('inputsAdv');
let inp0 = document.getElementById("inpAdv0");
let inp1 = document.getElementById("inpAdv1");
let inp2 = document.getElementById("inpAdv2");
let intentos = 0;
let posibilidades = 0;
let posibilidadesText;
let intentosText;

function pistaAdv() {
    document.getElementById('pistaAdv').innerHTML = pistaAdvCont;
}

function inpCall() {
    x = inp0.value;
    y = inp2.value;
    inp0.value = "";
    inp2.value = "";
}
function mathRandom() {
    min = Math.ceil(x);
    max = Math.ceil(y);
    conChoise = Math.floor(Math.random() * (max - min + 1) + min);
}
function xyMachine() {
    inpCall();
    if ((x || y) == "") {
        pistaAdvCont = "Rellene los campos";
    } else if (x > 99999 || y > 99999 || x < -99999 || y < -99999) {
        pistaAdvCont = "Valores mayores a 99999 o menores a -99999, no válidos";
    } else if (parseFloat(x) > parseFloat(y)) {
        pistaAdvCont = "X no puede ser mayor a Y"; 
    } else if ((x && y) != "") {
        xAdv.innerHTML = x;
        yAdv.innerHTML = y;
        mathRandom();
        pistaAdvCont = "Número elegido <br> Inserte su apuesta";
    }
    intentos = 0;
    pistaAdv();
}

function userCall() {
    userOpt = inp1.value;
    inp0.value = "";
    inp1.value = "";
    inp2.value = "";
}
inp1.onkeydown = function enter(e) {
    if(e.keyCode == 13) {
        userOptMachine();
    }
}

function userOptMachine() {
    userCall();
    intentos += 1;
    posibilidades = (y - x) + 1;
    if (userOpt > parseFloat(y) || userOpt < parseFloat(x) || userOpt == "") {
        pistaAdvCont = "Apuesta inválida";
        intentos -= 1;
    } else if (userOpt < conChoise) {
        pistaAdvCont = 'Pista: ' + userOpt + ' es menor';
    } else if (userOpt > conChoise) {
        pistaAdvCont = 'Pista: ' + userOpt + ' es mayor';
    } else if (userOpt = conChoise || (userOpt == 0 && conChoise == 0)) {
        winner();
    }
    pistaAdv();
}

function winner () {
    posibilidadesText = posibilidades === 1 ? ` posibilidad` : ` posibilidades`;
    intentosText = intentos === 1 ? ` intento` : ` intentos`;
    pistaAdvCont = "¡Has acertado! <br> El número ganador ha sido:<br>" + conChoise + `<br><br>Has acertado en ${intentos + intentosText}<br>en un total de ${posibilidades + posibilidadesText}.`;
    btnTryAgain.style.visibility = "visible";
    btnTryAgain.style.position = "relative";
    btnAdv.style.position = "absolute";
    btnAdv.style.visibility = "hidden";
    intentos = 0;
    posibilidades = 0;
}

function winnerClear() {
    pistaAdvCont = "¿Cerca o lejos?";
    xAdv.innerHTML = "x"
    yAdv.innerHTML = "y"
    userOpt = "";
    x = "";
    y = "";
    conChoise = undefined;
    btnTryAgain.style.visibility = "hidden";
    btnTryAgain.style.position = "absolute";
    btnAdv.style.position = "relative";
    btnAdv.style.visibility = "visible";
    pistaAdv();
}

//APP LISTA DE TAREAS.

let listInp = document.getElementById('listSearchNav');
let uL = document.getElementById('appListElement');
let list = [];
let clickedLi;
let clickedLiValue;
let listed;
let listSavedData;

function sendToList() {
    listSavedData = localStorage.getItem('listData');
    listed = "";
    list.push(listInp.value);
    let listResult = "";
    if (listSavedData === null) {
        for(let i = 0; i < list.length; i++) {
            listResult = listed += `<li class="appLiClass" id="appLi${Math.floor(Math.random() * 9999)}" onClick="reply_click(this.id)" tabindex='0'>` + list[i] + "</li>";
    }} else {
        for(let i = 0; i < list.length; i++) {
            listResult = listSavedData + `<li class="appLiClass" id="appLi${Math.floor(Math.random() * 9999)}" onClick="reply_click(this.id)" tabindex='0'>` + list[i] + "</li>";
        }}
    uL.innerHTML = listResult;
    listInp.value = "";
    saveListData();
}

listInp.onkeydown = function enter(e) {
    if(e.keyCode == 13) {
        sendToList();
    }
}

function reply_click(clicked_id) {
    clickedLi = clicked_id;
    clickedLiValue = document.getElementById(clickedLi);
}

function tachar() {
    clickedLiValue.style.textDecoration = 'line-through';
    saveListData();
}
function destachar() {
    clickedLiValue.style.textDecoration = 'none';
    saveListData();
}
function borrar() {
    let removed = clickedLiValue;
    removed.parentNode.removeChild(removed);
    saveListData();
}

function borrarTodo() {
    list = [];
    uL.innerHTML = list;
    document.querySelector('.listPopUp').classList.remove('active');
    localStorage.clear();
    saveListData();
}


function saveListData() {
    localStorage.setItem('listData', uL.innerHTML);
}

function displayListData() {
    listSavedData = localStorage.getItem('listData');
    uL.innerHTML = listSavedData;
}
displayListData();

//FECHA ACTUAL USANDO NPM - DAYJS
let zone = document.getElementById('zoneP')
let time = document.getElementById('timeP');
let date = document.getElementById('dateP');
zone.innerHTML = dayjs().format(`dddd`);
time.innerHTML = dayjs().format(`hh:mm:ss`);
date.innerHTML = dayjs().format('DD MMMM YYYY');




//copybranch