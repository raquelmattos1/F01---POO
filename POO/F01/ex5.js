/* a. [10,20] – “positiva”;
b. [7,10[ – “oral”;
c. [0-7[ – “negativa”;
d. outro valor – “nota inválida”. */

const nota = +prompt("Introduza a sua nota: ")
let result = ""

if (nota >= 10 && nota <= 20) {
    result="Positiva"
} else if (nota >= 7 && nota < 10) {
    result="Oral"
} else if (nota < 7 && nota >= 0) {
    result="Negativa"
} else {
    result="Nota inválida"
}

alert(result)