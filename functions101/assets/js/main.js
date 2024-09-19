// typically called a pure function
const pureFunc = (a, b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    return a + b;
}

let c = 100;
// this is an impure function coz c may change and therefore the function results will change
// an external factor makes the resulting function change and not consistent
const impureFunc = (a, b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    return a + b + c;
}

const sideEffectFunc = (a, b) => {
    c = 200;
    return a * b;
}

const x = pureFunc(4, 1);
console.log('x: ', x);

// impure function
const y = impureFunc(4, 1);
console.log('y: ', y);

console.log('c: ', c);
const z = sideEffectFunc(4, 1);
console.log('z with changes to c (causing side effect): ', z);
console.log('now c: ', c);

