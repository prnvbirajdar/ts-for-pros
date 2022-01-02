function sum (a: number ,b: number): number {
    return a + b
}

sum(1,3)

function call(message: string = 'default'): void {
    console.log(message);
}

call('hi')

function add(...values: number[]) {
    return values.reduce((sum, prev) => sum + prev)
}

add(1, 2, 3, 4, 5)

type Subtract = (a: number, b: number ) => number

let subtract: Subtract =  function(a, b) {
    return a - b
}

console.log(subtract(5213, 1232));


