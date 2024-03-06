// Definindo a função para simular a situação dos interruptores e lâmpadas
function descobrirInterruptores() {
  // Inicialmente, todas as lâmpadas estão apagadas
  let l1 = false; // Lâmpada 1
  let l2 = false; // Lâmpada 2
  let l3 = false; // Lâmpada 3

  // Primeira ida à sala das lâmpadas
  // Ligue o interruptor 1
  let interruptor1 = true;
  // Espere alguns minutos
  // Desligue o interruptor 1 e ligue o interruptor 2
  let interruptor2 = true;

  // Segunda ida à sala das lâmpadas
  // Verifique o estado das lâmpadas
  if (l1) {
    console.log("O interruptor 1 controla a lâmpada 1.");
  } else if (l2) {
    console.log("O interruptor 2 controla a lâmpada 1.");
  } else {
    console.log("O interruptor 3 controla a lâmpada 1.");
  }

  if (l2) {
    console.log("O interruptor 2 controla a lâmpada 2.");
  } else if (interruptor1) {
    console.log("O interruptor 1 controla a lâmpada 2.");
  } else {
    console.log("O interruptor 3 controla a lâmpada 2.");
  }

  if (l3) {
    console.log("O interruptor 3 controla a lâmpada 3.");
  } else if (interruptor2) {
    console.log("O interruptor 2 controla a lâmpada 3.");
  } else {
    console.log("O interruptor 1 controla a lâmpada 3.");
  }
}

// Chamando a função para descobrir qual interruptor controla qual lâmpada
descobrirInterruptores();
