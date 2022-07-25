// 2. Crie um algoritmo que conte quantos números
// do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50,
// exiba uma mensagem secreta.

let num = 0;

for (let i = 3; i <= 150; i += 3) {
  num += 1;
}
if (num === 50) {
  console.log("A mensagem secreta");
}
