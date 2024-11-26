let numeroMaterias = prompt("Ingrese su cantidad de materias");
let caliArr = [];

for(let i = 1; i <= numeroMaterias; i++){
    let calificacion = prompt("Ingrese la calificacion de la materia " + i);
    caliArr.push(Number(calificacion));
}

let sumCali = 0;

for(let i = 0; i < caliArr.length; i++){
    sumCali = caliArr[i] + sumCali;
}

let promedio = (sumCali / numeroMaterias);
alert("Tu promedio es: " + promedio);