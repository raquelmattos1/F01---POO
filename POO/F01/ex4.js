/* a. 1, se o valor for maior que zero;
b. -1, se menor que zero;
c. 0, se igual a zero. */

const num = +prompt("Introduza um número: ")
var result = ""

if (num > 0) {
    result = 1
} else if (num < 0) {
    result = -1
} else {
    result = 0
}

alert(result)