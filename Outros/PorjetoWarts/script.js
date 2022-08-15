let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let btn = document.querySelector('#submit-btn');
let agree = document.querySelector('#agreement');
let contador = document.querySelector('#contador');

function verificaSenha() {
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ativar() {
  if (agree.checked) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
}
// console.log(document.querySelector('#textarea').getAttribute('maxlength'));
contador.innerHTML = document.querySelector('#textarea').getAttribute('maxlength');

function contadorCaracteres(campoDigitado) {
  let maxCaracteres = document.querySelector('#textarea').getAttribute('maxlength');
  let digitado = campoDigitado.value.length;
  let rest = maxCaracteres - digitado;
  contador.innerHTML = rest;
  console.log(rest);
}

let form1 = document.querySelector('#evaluation-form');
let form2 = document.querySelector('#form-data');
btn.addEventListener('click', function () {
  if (form1.style.display === 'flex') {
    form1.style.display = 'none';
    form2.style.display = 'flex';
    nome();
  } else {
    form1.style.display = 'flex';
    form2.style.display = 'none';
  }
});

function nome() {
  let nome = document.querySelector('#nome');
  let inputName = document.querySelector('#input-name');
  nome.innerHTML = inputName.value;
}
