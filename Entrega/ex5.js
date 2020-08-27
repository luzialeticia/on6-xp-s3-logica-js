/* 5. Crie uma função que receba um número e devolva uma soma progressiva.
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. */

function somaNumero(x) {
    let soma = 0
    for (let i = 0; i <= x; i++) {
        soma += i
    }
    return soma
}

const input = require('readline-sync')

let numero = parseInt(input.question("Digite um nº inteiro: "))

console.log(somaNumero(numero))