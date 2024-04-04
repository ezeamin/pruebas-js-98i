// function saludar(nombre, edad, signo){
//     //logica de lo que va a hacer la funcion
//     console.log(`hola ${nombre}, tu edad es ${edad} años`)
//     //return 
// }

// let name = "Anabela"

// saludar("Paula", 26)
// saludar("Anabela", 26)
// saludar("Jose", 26)
// saludar("Nahuel", 26)

function calculadora(num1, num2, operacion){
    let resultado = 0;

    switch(operacion){
        case "suma": {
            resultado= num1 + num2;
            break
        }
        case "resta": {
            resultado = num1 - num2;
            break
        }
        case "multiplicacion": {
            resultado = num1 * num2;
            break
        }
        case "division": { 
            if(num2 === 0){
                console.log("no se puede realizar la operacion")
                return
            }
            resultado = num1 / num2;
            break
        }
        default: {
            console.log("Sos un gil, escribi bien la operación")
        }
    }

    return resultado
}

let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(num1, num2, operacion)
console.log(`El resultado es: ${resultado}`)