// 3. Crie um algoritmo que recebe a idade de Nat, 
// Renan e Sincero e imprime quem é a pessoa mais 
// nova no formato: "Pessoa" é a mais nova.

let Nat = 18;
let Renan = 19;
let Sincero = 22;

if (Nat < Renan && Nat < Sincero) {
    console.log("Nat é a mais nova.");
} else if (Renan < Sincero) {
    console.log("Renan é o mais novo.");
} else {
console.log("Sincero é o mais novo.");
}
