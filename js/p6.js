function cambiarBento() {
    const elementosBGrid = document.querySelectorAll(".grid");
    elementosBGrid.forEach(elemento => {
        elemento.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        elemento.style.padding = "20px";
        elemento.style.color = "#ffff64";
        elemento.style.fontSize = "0.8rem";
        elemento.style.fontFamily = "arial";
        elemento.style.cursor = "pointer";
        elemento.style.borderRadius = "100px";     
    });
}