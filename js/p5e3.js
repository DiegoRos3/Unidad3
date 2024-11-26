let cantNumeros = prompt("Cuantos numeros más deseas añadir:");
let numArreglo = [1,2,3,4,5];

for(let i = 1; i <= cantNumeros; i++){
    let numIng = prompt("Ingrese su numero: ");
    numArreglo.push(Number(numIng));
}

let sumNum = 0;

for(let i = 0; i < numArreglo.length; i++){
    sumNum = numArreglo[i]  + sumNum;
}

alert("Los numeros ingresados fueron: " + numArreglo.join(","));

alert("La suma de los numeros en el arreglo es: " + sumNum);

