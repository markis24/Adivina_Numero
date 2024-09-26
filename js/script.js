let num1 = 2;

let num2 = "4"; // El resultado sera 24 porque se concatena

let suma = num1 + num2

console.log(suma)

let num3 = 6

let num4 = 7

if(num3 !== num4){
    console.log("Els valors no son iguals")
}else {
    console.log("Els valors son iguals")
}
let color = ""

let isPartidaFinalizada = false;

color = isPartidaFinalizada ? "verde":"rojo";

console.log(color)

const NUM_JUGADAS = 20
const MAX_NUM = 20
const MIN_NUM = 1

// Variables del juego

let numJugades = NUM_JUGADAS ;

function reiniciarPartida(){
    // Tenemos que llamar al id del input 
    // En este caso ponemos el valor a cero
    let num = document.getElementById("num").value=null;
    console.log(num)
}
function jugarPartida(){
    let num = document.getElementById("num").value;
    // Restar una jugada de la partida
    if (num){
        --numJugades;
        document.getElementById("contador").textContent = numJugades;
        // typeof se utiliza para saber de que tipo es una variable
       console.log(numJugades,typeof numJugades)
    }else{
        alert("No has introducido ningun numero")
    }
    // Comparar nuestro numero con el numero secreto

    let numSecreto = Math.random() * MAX_NUM;
    let numSecret
    let num2 = Math.floor(Math.random() * 20) + 1; // Numero entre 1 i 20
    // Informar si es menor o mayor
    console.log(num2)
    console.log(num)
   if (num > num2){
        console.log("El numero es muy grande")
    }else if (num2 > num){
        console.log("El numero es muy pequeño")
    }else{
        console.log("El numero es correcto")
    }
}


