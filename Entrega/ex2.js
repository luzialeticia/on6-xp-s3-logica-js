// Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

function tempCelsius(x) {
    return (x-32) * 5/9
}

const input = require('readline-sync')

const tempFahrenheit = parseFloat(input.question("Digite a temperatura em Fahrenheit: "))

console.log(`${tempFahrenheit}°F corresponde a ${(tempCelsius(tempFahrenheit)).toFixed(1)}°C.`)