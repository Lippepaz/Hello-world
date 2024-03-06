// Sequência a) 1, 3, 5, 7, ___
function proximoElementoA() {
  let ultimoElemento = 7;
  let proximo = ultimoElemento + 2;
  return proximo;
}

// Sequência b) 2, 4, 8, 16, 32, 64, ____
function proximoElementoB() {
  let ultimoElemento = 64;
  let proximo = ultimoElemento * 2;
  return proximo;
}

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
function proximoElementoC() {
  let ultimoElemento = 36;
  let proximo = Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
  return proximo;
}

// Sequência d) 4, 16, 36, 64, ____
function proximoElementoD() {
  let ultimoElemento = 64;
  let proximo = Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
  return proximo;
}

// Sequência e) 1, 1, 2, 3, 5, 8, ____
function proximoElementoE() {
  let sequencia = [1, 1];
  let proximo =
    sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
  return proximo;
}

// Sequência f) 2, 10, 12, 16, 17, 18, 19, ____
function proximoElementoF() {
  let ultimoElemento = 19;
  let proximo = ultimoElemento + 1;
  return proximo;
}

// Exibindo os resultados
console.log("Sequência a): " + proximoElementoA());
console.log("Sequência b): " + proximoElementoB());
console.log("Sequência c): " + proximoElementoC());
console.log("Sequência d): " + proximoElementoD());
console.log("Sequência e): " + proximoElementoE());
console.log("Sequência f): " + proximoElementoF());
