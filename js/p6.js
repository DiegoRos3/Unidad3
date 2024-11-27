function cambiarBento() {
    let elementosBGrid = document.querySelectorAll(".grid");
    elementosBGrid.forEach(elemento => {
        elemento.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        elemento.style.padding = "20px";
        elemento.style.color = "#ffff64";
        elemento.style.fontSize = "0.8rem";
        elemento.style.fontFamily = "arial";
        elemento.style.borderRadius = "100px";     
    });

    let elementosParrafo = document.querySelectorAll("p");
    elementosParrafo.forEach(eleP => {
        eleP.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    });

    let elementosH3 = document.querySelectorAll("h3");
    elementosH3.forEach(eleH3 => {
        eleH3.innerText = "Practica 666"
        eleH3.style.color = "#af0c00";
    });
    
    let bento = document.querySelector(".bento");
        bento.style.gridTemplateColumns = 'repeat(1, 1fr)';
    
}