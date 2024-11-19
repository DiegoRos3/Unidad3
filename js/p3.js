recolectarDatos();


function confirmacion(nombre, actfav){
    let conf = confirm("¿desea guardar su informacion?");
    if(conf){
        alert("Registro guardado");
        mostrarMensaje(nombre, actfav);
    } else{
        alert("Registro borrado");
    }
    mensajeMio();
}

function recolectarDatos(){
    alert("Holaaaaa");
    let nombre = prompt("Ingrese su nombre: ");
    let actFav = prompt("Ingrese su actividad favorita: ");
    confirmacion(nombre, actFav);
}

function mostrarMensaje(nombre,actFav){
    alert("Tu nombre es:" + nombre);
    alert("Tu actividad favorita es:" + actFav);
}

function mensajeMio(){
    alert("Easteregg");
}