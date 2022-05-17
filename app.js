const relogio = document.querySelector('.clock-time');
const cronometro = document.querySelector('.clock-cron');
const btnIniciar = document.querySelector('input[value="Iniciar"]');

console.log(relogio);

function horaRelogio() {
  const tempoAgora = new Date();
  let hora = tempoAgora.getHours();
  let min = tempoAgora.getMinutes();
  let seg = tempoAgora.getSeconds();
  relogio.innerText = addZero(hora) + ':' + addZero(min) + ':' + addZero(seg);
}

function addZero(n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
}

horaRelogio();
const loopRelogio = setInterval(horaRelogio, 1000);

function set() {
  clearInterval(loopRelogio);

  let hora = +prompt('Digite a hora');
  let min = +prompt('Digite o minuto');
  let seg = +prompt('Digite os segundos');

  relogio.innerText = addZero(hora) + ':' + addZero(min) + ':' + addZero(seg);
  const loopAjuste = setInterval(() => {
    seg++;
    if (seg == 60) {
      seg = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hora++;
    }
    if (hora == 24) {
      hora = 0;
      min = 0;
      seg = 0;
    }

    relogio.innerText = addZero(hora) + ':' + addZero(min) + ':' + addZero(seg);
  }, 1000);
}

let cronometroLoop;

let hora = 0;
let min = 0;
let seg = 0;

function init() {
  btnIniciar.setAttribute('value', 'Pausar');
  btnIniciar.setAttribute('onclick', 'pausa()');

  cronometro.innerText =
    addZero(hora) + ':' + addZero(min) + ':' + addZero(seg);

  cronometroLoop = setInterval(() => {
    seg++;
    if (seg == 60) {
      seg = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hora++;
    }
    if (hora == 24) {
      hora = 0;
      min = 0;
      seg = 0;
    }

    cronometro.innerText =
      addZero(hora) + ':' + addZero(min) + ':' + addZero(seg);
  }, 1000);
}

function pausa() {
  btnIniciar.setAttribute('value', 'Iniciar');
  btnIniciar.setAttribute('onclick', 'init()');
  clearInterval(cronometroLoop);
}

function end() {
  hora = 0;
  min = 0;
  seg = 0;
  cronometro.innerText = '00:00:00';
  clearInterval(cronometroLoop);
}