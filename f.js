function multiplicacion(lista){
    return lista.map(
        (num)=> num*2
    );
}

//copiado de internet
var f = new Date();
console.log(f.getDate());
console.log(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

//agregado a funcion
function fechaHoy2(){
    var f = new Date();
    let fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    return fecha;
}

//algo random que cumple con el enunciado
function fechaHoy(num1, num2, num3){
    return(num1 + "/" + num2 + "/" + num3);
}


//dias restantes
function endYear(){
    let days = 365;
    var f = new Date();

    let daysTotales = null;

    let fechaActual = {
        day: f.getDate(),
        month: f.getMonth(),
        year: f.getFullYear()
    }

    let months = {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31
    }

    if(fechaActual.year%4===0){
        days = days + 1;
    }

    for(let i = 0; i < fechaActual.month; i++){
        daysTotales= daysTotales + months[i];
    }
    daysTotales= daysTotales+fechaActual.day;

    return(days-daysTotales);
}

//incompleto
let x = {
    key: 12345,
    valor: "bla bla bla"
}

let y = {
    key: 12345,
    valor: "bla bla bla"
}

function comparacion(obj1, obj2){

    let keys = false;
    let valores = false;


    if(obj1.key === obj2.key){
        keys= true;
    }

    if(obj1.valor === obj2.valor){
        valores= true;
    }

    return("key: " + keys +" "+ "valor: " + valores);

}