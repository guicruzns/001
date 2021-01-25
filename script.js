function Contar(){
    var start = document.getElementById('start')
    var step = document.getElementById('step')
    var final = document.getElementById("final")
    if (Number(start.value)> 0 && Number(final.value)> 0 && Number(step.value) != 0){
        var nstart = Number(start.value)
        var nstep = Number(step.value)
        var nfinal = Number(final.value)
        var res = document.querySelector('div#nb')
        if(nstart < nfinal && nstart != nfinal){
            while(nstart<=nfinal){
                nstart + nstep
                res.innerHTML = `${nstart}`
            }
        }
}
}
