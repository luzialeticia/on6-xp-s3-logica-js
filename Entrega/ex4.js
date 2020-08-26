/* 4. Crie uma função com as seguintes características:

    A função deve receber 3 parâmetros.
    Se somente um argumento for passado, retorne o valor do argumento.
    Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
    Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
    Se nenhum argumento for passado, retorne "não recebeu parâmetro" */

    
function calc(a, b, c) {
    if(!b && !c) {
        return a
        }else if(!c) {
            return a+b
            }else if(!a && !b && !c) {
                return "Não recebeu parâmetro"
                }else {
                    return (a+b)/c
                }
}

const input = require('readline-sync')
    
const num1 = Number(input.question("Digite o 1º nº: "))
const num2 = Number(input.question("Digite o 2º nº: "))
const num3 = Number(input.question("Digite o 3º nº: "))

console.log(calc(num1, num2, num3))
