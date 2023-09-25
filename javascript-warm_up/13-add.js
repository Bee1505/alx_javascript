#!/usr/bin/node
const add = require('./13-add').add;

const result1 = add(4, 85);
console.log(`Correct output - 4 + 85: ${result1}`);

const result2 = add(93, -4);
console.log(`Correct output - 93 + -4: ${result2}`);

const result3 = add(0, 89);
console.log(`Correct output - 0 + 89: ${result3}`);



