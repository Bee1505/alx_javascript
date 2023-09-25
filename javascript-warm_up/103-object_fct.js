#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++;
  }
};

console.log(myObject);

Object.defineProperty(myObject, 'incr', {
  enumerable: false, // Prevent the function from being enumerated
  value: myObject.incr
});

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

