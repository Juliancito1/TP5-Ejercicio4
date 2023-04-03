const diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const meses = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

function obtenerHora(){
    let fecha = new Date()


let pFecha = document.getElementById('fecha');

pFecha.innerHTML = `${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`

let pHora = document.getElementById('hora');
    
    if(fecha.getSeconds() < 10)
    {
        if(fecha.getMinutes() < 10)
        {
        if(fecha.getHours<=12)
        {
        pHora.innerHTML = `${fecha.getHours()}:0${fecha.getMinutes()}:0${fecha.getSeconds()} AM`
        }
        else{
            pHora.innerHTML = `${fecha.getHours()}:0${fecha.getMinutes()}:0${fecha.getSeconds()} PM`
        }
        }else{
            if(fecha.getHours<=12)
        {
        pHora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:0${fecha.getSeconds()} AM`
        }
        else{
            pHora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:0${fecha.getSeconds()} PM`
        }
        }
    }
    else{
        if(fecha.getMinutes() < 10)
        {
        if(fecha.getHours<=12)
        {
        pHora.innerHTML = `${fecha.getHours()}:0${fecha.getMinutes()}:${fecha.getSeconds()} AM`
        }
        else{
            pHora.innerHTML = `${fecha.getHours()}:0${fecha.getMinutes()}:${fecha.getSeconds()} PM`
        }
    }else{
        if(fecha.getHours<=12)
        {
        pHora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} AM`
        }
        else{
            pHora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} PM`
        }
    }
    }

}

setInterval(obtenerHora,1000)