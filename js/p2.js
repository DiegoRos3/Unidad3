let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let pais = prompt("Ingrese su pais de residencia");
alert("Hola " + nombre + ", tus datos están siendo procesados...")
let confirmacion = prompt("¿Sus datos son correctos?")
if(confirmacion === "si"){
    mostrarFormulario(nombre, edad, pais);
}else{
    alert("Registros borrados");
}

function mostrarFormulario(nombre, edad, pais){
    alert("Registro guardado correctamente:" + "\nNombre: " + nombre + "\nEdad: " + edad + "\nPais: " + pais);
}