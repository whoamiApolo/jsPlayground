/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const fibonacci = (element) => {
  if (element === 0) {
    return 0;
  } else if (element === 1) {
    return 1;
  }

  while (element > 1) {
    return fibonacci(element - 1) + fibonacci(element - 2);
  }
};

for (let i = 0; i <= 10; i++) {
  console.log(`Fibonacci de ${i}: ${fibonacci(i)}`);
}
