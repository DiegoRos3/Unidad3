function borrarElemento(){
    let documento = document.querySelector("#menu_nav").children[0];
    documento.remove();
}

function agregarElemento(){
    let peli = prompt("Nombre de la pelicula: ");
    let link = prompt("Link de la pelicula: ");
    let lista = document.createElement("li");
    lista.innerHTML = "<a href='"+link+"'>"+peli+"</a>";
    menu_nav.appendChild(lista);
}
