let loop;
let milissegundos;
let segundos;
let minutos;
let horas;

let spanHoras = document.getElementById("horas");
let spanMinutos = document.getElementById("minutos");
let spanSegundos = document.getElementById("segundos");
let spanMilissegundos = document.getElementById("milissegundos");
let titulo = document.getElementsByTagName("title")[0]

let botoes = document.getElementById("botoes");
let btnStart = document.getElementById("btnStart");

let dataInicial;
let dataAtual;
let diferenca = 0;

function ativar() {
    btnStart.disabled = "true";
    dataInicial = new Date().getTime() - diferenca;
    loop = setInterval(start, 50);
}

function start() {
    dataAtual = new Date().getTime();
    diferenca = dataAtual - dataInicial;

    var diferencaSegundos = Math.floor(diferenca / 1000);
    var diferencaMinutos = Math.floor(diferencaSegundos / 60);
    var diferencaHoras = Math.floor(diferencaMinutos / 60);

    milissegundos = calcularTempo(diferenca, 1000);
    segundos = calcularTempo(diferencaSegundos, 60);
    minutos = calcularTempo(diferencaMinutos, 60);
    horas = calcularTempo(diferencaHoras, 60);

    milissegundos = formatar(milissegundos, "milissegundos");
    segundos = formatar(segundos, "segundos");
    minutos = formatar(minutos, "minutos");
    horas = formatar(horas, "horas");

    spanMilissegundos.innerHTML = milissegundos;
    spanSegundos.innerHTML = segundos;
    spanMinutos.innerHTML = minutos;
    spanHoras.innerHTML = horas;
    titulo.innerHTML = `${horas}:${minutos}:${segundos}`
}

function stop() {
    btnStart.disabled = false;
    clearInterval(loop);
}

function reset() {
    btnStart.disabled = false;
    clearInterval(loop);

    diferenca = 0;
    spanHoras.innerHTML = "00";
    spanMinutos.innerHTML = "00";
    spanSegundos.innerHTML = "00";
    spanMilissegundos.innerHTML = "000";
}

function calcularTempo(tempo, numero) {
    return tempo - (numero * Math.floor(tempo / numero));
}

function formatar(numero, tipo) {
    if (tipo != "milissegundos") {
        if (numero < 10) {
            numero = "0" + numero;
        }
        return numero;
    }
    else {
        if (numero < 10) {
            numero = "00" + numero;
        }
        else if (numero < 100) {
            numero = "0" + numero;
        }
        return numero;
    }
}
