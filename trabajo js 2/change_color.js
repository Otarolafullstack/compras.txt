let btn_green = document.getElementById('btngreen');
let btn_blue = document.getElementById('btnblue');
let btn_pink = document.getElementById('btnpink');
let btn_orange = document.getElementById('btnorange');
let btn_default = document.getElementById('btndefault');
let box = document.querySelector('.box');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

function changeColorBtn1() {
  if (btn_green.value == "green") {
    box.style.background = btn_green.value;
  }
}

function changeColorBtn2() {
  if (btn_blue.value == "blue") {
    box.style.background = btn_blue.value
  }
}

function changeColorBtn3() {
  if (btn_pink.value == "pink") {
    box.style.background = btn_pink.value
  }
}

function changeColorBtn4() {
  if (btn_orange.value == "orange") {
    box.style.background = btn_orange.value
  }
}

function changeColorBtn5() {
  if (btn_default.value == "default") {
    box.style.background = "#556677"
  }
}

mensaje.addEventListener('input', function (e) {
  const target = e.target;
  const longitudAct = target.value.length;
  contador.innerHTML = `${longitudAct}`;
});



