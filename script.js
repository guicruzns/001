function Contar(){
    var start = document.getElementById('start')
    var step = document.getElementById('step')
    var final = document.getElementById("final")
    if (Number(start.value)> 0 && Number(final.value)> 0 && Number(step.value) > 0){
        var nstart = Number(start.value)
        var nstep = Number(step.value)
        var nfinal = Number(final.value)
        var res = document.querySelector('div#nb')
        res.innerHTML = "..."
        if(nstart < nfinal){

            for(var i = nstart;i <= nfinal;i += nstep){res.innerHTML += `\u{1F449} ${i}`}res.innerHTML += `\u{1F449} \u{1f3c1}`}
        else if(nstart > nfinal){

            for(var c = nstart;c >= nfinal;c -= nstep){res.innerHTML += `\u{1F449} ${c}`} res.innerHTML += `\u{1F449} \u{1f3c1}`}
        else if(nstart == nfinal){res.innerHTML += `\u{1F449} ${nstart} \u{1f3c1}`}
}
}