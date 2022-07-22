let array = ['java', 'javascript', 'python', 'html', 'css'];

let big = array[0];
let small = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > big.length) {
        big = array[i];
    }
}
console.log(big);

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < small.length) {
        small = array[i];
    }
}
console.log(small);