// 3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const input = require('readline-sync')

const metros = parseFloat(input.question("Digite o valor em metros: "))
const milimetros = (x) => x*1000 //Arrow function

console.log(`${metros} metros corresponde a ${milimetros(metros)} milímetros.`)