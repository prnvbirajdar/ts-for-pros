"use strict";
const last = (arr) => {
    return arr[arr.length - 1];
};
const stringLast = last(['1', '23', '2']);
const stringNum = last([1, 2, 3]);
const person = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
const Mike = person({ firstName: 'mike', lastName: 'fast', age: 15 });
