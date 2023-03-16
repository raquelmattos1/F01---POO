/* Crie um programa que imprima os números de 1 até um nº pedido ao utilizador; */

const num = +prompt("Até que número deseja imprimir? ")
let nums = []

for (let i = 1; i <= num; i++) {
    nums.push(i)
}

alert(nums)