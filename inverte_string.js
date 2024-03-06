//Questão 5)
function inverterString(string) {
  return string.split("").reverse().join("");
}

const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
