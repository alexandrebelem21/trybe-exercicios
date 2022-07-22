let a = 60;
let b = 60;
let c = 0;

angulo = a + b + c;
if (a < 0 || b < 0 || c < 0) {
    console.log('Erro');

} else if (angulo == 180) {
    console.log(true);
} else if (0 <= angulo !== 180) {
    console.log(false);
}
