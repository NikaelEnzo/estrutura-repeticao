/*
            Estrutura de repetição do...while: 
12. Questão: Escreva um código que imprima os números pares de 2 a 10.  
*/

let numero = 2

do {
    if (numero % 2 == 0) {
        console.log("numero: " + numero)
    }
    numero++;
}

while (numero <= 10)