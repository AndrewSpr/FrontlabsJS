let a = 1, b = 1;

let c = ++a; // тут a збільшиться на 1 перед присвоєнням, отже c = 2
let d = b++; // тут b збільшиться на 1 після присвоєння, отже d = 1

console.log(c, d)