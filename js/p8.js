const suma = (n1, n2) => {
    return alert("El resultado de la suma es: " + (n1 + n2));
}

const suma2 = () => {
    const num1 = Number(prompt("Ingrese el primer número:"));
    const num2 = Number(prompt("Ingrese el segundo número:"));
    return alert("El resultado de la suma es: " + (num1 + num2));
}

const esPar = () => {
    const num = prompt("Ingrese un número:");
    if (num % 2 === 0){
        return alert("El número es par");
    } else {
        return alert("El número es impar");
    }
}

const map = () => {
    const numerosString = prompt("Ingrese números separados por comas:");
    const numerosArray = numerosString.split(",").map(Number);
    const numerosDoble = numerosArray.map(numero => numero * 2);
    alert("Números al doble: " + numerosDoble);
}

const mapArr = () => {
    const numeros = [2, 5, 10, 8, 4];
    const numDob = numeros.map(numero => numero * 2);
    alert("Números al doble: " + numDob);
};

const listobj = [
    { nombre: "Diego"},
    { nombre: "Aaron"},
    { nombre: "Rose"},
    { nombre: "Aguirre"}
];

const nombresArr = () => {
    const nomObj = listobj.map(listobj => listobj.nombre);
    alert("Nombres: " + nomObj);
};