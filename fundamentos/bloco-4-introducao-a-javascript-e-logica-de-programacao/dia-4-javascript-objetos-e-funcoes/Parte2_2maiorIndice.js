function recebeArray(numeros) {
  let maior = 0;
  for (let i in numeros) {
    if (numeros[maior] < numeros[i]) {
      maior = i;
    }
  }
  return maior;
}
console.log(recebeArray([2, 3, 6, 7, 10, 1]));
