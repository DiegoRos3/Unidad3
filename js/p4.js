let horario = {
    materia1: "Lenguajes y Automatas",
    materia2: "Arquitectura de Computadoras",
    materia3: "Fundamentos de Telecomunicaciones",
    materia4: "Taller de Bases de Datos",
    materia5: "Fundamentos de Ingenieria de Software",
    materia6: "Sistemas Operativos",
    materia7: "Programacion Web",
    hora1: "9-10",
    hora2: "12-13",
    hora3: "13-14",
    hora4: "14-15",
    hora5: "15-16",
    hora6: "16-17",
    hora7: "17-18",

    imprimir: function(){
        let tabla = document.createElement('table');

        let encabezado = tabla.insertRow();
        let celdaMateria = encabezado.insertCell();
        celdaMateria.textContent = 'Materia';
        let celdaLunes = encabezado.insertCell();
        celdaLunes.textContent = 'Lunes';
        let celdaMartes = encabezado.insertCell();
        celdaMartes.textContent = 'Martes';
        let celdaMiercoles = encabezado.insertCell();
        celdaMiercoles.textContent = 'Miercoles';
        let celdaJueves = encabezado.insertCell();
        celdaJueves.textContent = 'Jueves';
        let celdaViernes = encabezado.insertCell();
        celdaViernes.textContent = 'Viernes';

        for (let i = 1; i <= 7; i++) {
            let fila = tabla.insertRow();
            let celdaMateria = fila.insertCell();
            celdaMateria.textContent = horario['materia' + i];
            
            let celdaLunes = fila.insertCell();
            celdaLunes.textContent = horario['hora' + i];
            let celdaMartes = fila.insertCell();
            celdaMartes.textContent = horario['hora' + i];
            let celdaMiercoles = fila.insertCell();
            celdaMiercoles.textContent = horario['hora' + i];
            let celdaJueves = fila.insertCell();
            celdaJueves.textContent = horario['hora' + i];
            let celdaViernes = fila.insertCell();
            if(i == 1 || i == 2 || i == 7){
                celdaViernes.textContent = horario['hora' + i];
            } else{
                celdaViernes.textContent = ' - ';
            }
        }

        document.body.appendChild(tabla);
    }
};

let conf = confirm("¿Quiere ejecutar el horario?");
    if(conf){
        horario.imprimir();
    } else{
        alert("El objeto no se ha ejecutado");
    }
