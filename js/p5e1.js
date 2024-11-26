let numFrut = prompt("Ingrese el numero de frutas:")
let arrFrutas = [];

for (var i = 0; i < numFrut; i++){
    var fruta = prompt("Ingrese el nombre de la fruta: ");
    arrFrutas.push(fruta);
}

alert("Nombres de frutas:" + arrFrutas.join(","));