let onoff
let cmin = 0
let cseg = 0
let cmil = 0
let cHora = 0
let hora = document.getElementById("horas")
let min = document.getElementById("minutos")
let seg = document.getElementById("segundos")
let mili = document.getElementById('milisegundos')
let startbutton = document.getElementById("start")
let botoes = document.getElementById("botoes")
startbutton.addEventListener("click",ativar)
function ativar() {
    startbutton.classList = "remove"
    clearInterval(onoff)
    onoff = setInterval(start,10) 
}
function start() {

    if (cmil < 100) {
        if (cmil < 9) {
            cmil++
            mili.innerHTML = "0" + cmil
        } else {
            cmil++
            mili.innerHTML = cmil
        }
    }
    if (cmil == 100) {
        cmil = 0
        mili.innerHTML = "0" + cmil
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
            if(cmin == 60){
                cmin = 0
                cmin.innerHTML = "0" + cmin
                if (cHora < 9){
                    cHora++
                    horas.innerHTML = `0${cHora}`
                    
                }
                else{
                    cHora++
                    horas.innerHTML = cHora
                }
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
    cmin = 0
    cseg = 0
    cmil = 0
    min.innerHTML = "00"
    seg.innerHTML = "00"
    mili.innerHTML = "00"
}


