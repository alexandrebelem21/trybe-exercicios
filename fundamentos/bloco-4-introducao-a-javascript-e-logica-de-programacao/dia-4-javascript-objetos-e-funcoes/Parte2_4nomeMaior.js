function recebeArray(nome) {
  let maior = nome[0];
  for (let i in nome) {
    if (maior.length < nome[i].length) {
      maior = nome[i];
    }
  }
  return maior;
}
console.log(
  recebeArray(['José', 'Lucas', 'Nádiaaaaaaaaaa', 'Fernanda', 'Cairo', 'Joana'])
);
