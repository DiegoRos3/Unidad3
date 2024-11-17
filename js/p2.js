let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let pais = prompt("Ingrese su pais de residencia");
mostrarFormulario(nombre, edad, pais);



function mostrarFormulario(nombre, edad, pais){
    alert("Hola!, tus datos son:" + "\nNombre: " + nombre + "\nEdad: " + edad + "\nPais: " + pais);
    let confirmacion = prompt("¿Sus datos son correctos?")
    if(confirmacion === "si"){
        alert("Registro guardado correctamente");
    }else{
        alert("Registros borrados");
    }
}