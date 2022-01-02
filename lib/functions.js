"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 3);
function call(message = 'default') {
    console.log(message);
}
call('hi');
function add(...values) {
    return values.reduce((sum, prev) => sum + prev);
}
add(1, 2, 3, 4, 5);
let subtract = function (a, b) {
    return a - b;
};
console.log(subtract(5213, 1232));
