/* Crie um programa que peça um nº ao utilizador e que imprima a sua tabuada; */

const num = +prompt("Deseja a tabuada de que número? ")
let tabuada = []

for (let i = 0; i <= 10; i++) {
    tabuada += (`${num} * ${i} = ${num*i} \n`)
}

alert(tabuada)