// 1. Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

function tempFahrenheit(x) {
    return 9*x/5 + 32
}

const input = require('readline-sync')

const tempCelsius = parseFloat(input.question("Digite a temperatura em Celsius: "))

console.log(`${tempCelsius}°C corresponde a ${tempFahrenheit(tempCelsius)}°F.`)