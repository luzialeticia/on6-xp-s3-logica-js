/* 4. Crie uma função com as seguintes características:

    A função deve receber 3 parâmetros.
    Se somente um argumento for passado, retorne o valor do argumento.
    Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
    Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
    Se nenhum argumento for passado, retorne "não recebeu parâmetro" */

    
function calc(a, b, c) {
    return (a+b)/c
}

const input = require('readline-sync')
    
const num1 = parseInt(input.question("Digite o 1º nº: "))
const num2 = parseInt(input.question("Digite o 2º nº: "))
const num3 = parseInt(input.question("Digite o 3º nº: "))
    

if(!num2 && !num3) {
    console.log(num1)
    }else if(!num3) {
        console.log(num1+num2)
        }else if(!num1 && !num2 && !num3) {
            console.log("Não recebeu parâmetro")
            }else {
                console.log(`${calc(num1, num2, num3)}`)
            }
