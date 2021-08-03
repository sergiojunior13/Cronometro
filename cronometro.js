let onoff, p = document.getElementsByTagName("p")[0]
let cmin = 0
let cseg = 0
let cHora = 0
let hora = document.getElementById("horas")
let min = document.getElementById("minutos")
let seg = document.getElementById("segundos")
let startbutton = document.getElementById("start")
let botoes = document.getElementById("botoes")

startbutton.addEventListener("click", ativar)
p.addEventListener("click", about)

function ativar() {
    startbutton.classList = "remove"
    clearInterval(onoff)
    onoff = setInterval(start, 1000)
}
function start() {
    if (cseg < 9) {
        cseg++
        seg.innerHTML = "0" + cseg
    }
    else {
        cseg++
        seg.innerHTML = cseg
    }
    if (cseg == 60) {
        cseg = 0
        seg.innerHTML = "0" + cseg
        if (cmin < 9) {
            cmin++
            min.innerHTML = `0${cmin}`
        }
        else {
            cmin++
            min.innerHTML = cmin
        }
        if (cmin == 60) {
            cmin = 0
            min.innerHTML = "0" + cmin
            if (cHora < 9) {
                cHora++
                horas.innerHTML = `0${cHora}`

            }
            else {
                cHora++
                horas.innerHTML = cHora
            }
        }
    }
}
function stop() {
    startbutton.classList = "item"
    clearInterval(onoff)
}
function reset() {
    startbutton.classList = "item"
    clearInterval(onoff)
    cHora = 0
    cmin = 0
    cseg = 0
    hora.innerHTML = "00"
    min.innerHTML = "00"
    seg.innerHTML = "00"
}

function about(){
    let div = document.getElementById("about")
    if(div.className == ""){
        div.className = "about"
    }
    else {
        div.className = ""
    }
}
