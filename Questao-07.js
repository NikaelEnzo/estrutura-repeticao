/*
            Estrutura de repetição while: 
7. Questão: Escreva um código que imprima os números pares de 2 a 10. 
*/

let numero = 2

while (numero <= 10) {
    if (numero % 2 == 0) {
        console.log("numero: " + numero);
    }
    numero++;
}