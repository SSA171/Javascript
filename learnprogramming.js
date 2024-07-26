let age = 21 // let can only we used once to declare variable

let next = age + 1 // has let because we are defining a new variable next


console.log(age) //console.log() similar to print
console.log(next) //console.log() similar to print

3 + 4 // Adds 3 and 4: 7

let x = 2
let y = 3
x+y //Adds x and y, so in this example 2 + 3: 5

x*y // Multiplies x and y, so in this example: 2 * 3: 6

function double(number) {
    return number * 2
}

console.log(double(3))

function add(a, b) {
    return a + b
}
console.log(add(3,5))

function sum(x, y, z) {
    return x + y + z
}
console.log(sum(2,4,6))

function triple(number) {
    return number * 3
}

console.log(triple(5))
console.log(triple(10))

// Store the result of a function
function double(number) {
    return number * 2
}

let firstResult =  double(4)
let secondResult = double(10)


// Exercise  1
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
console.log(add(1,2))
console.log(add(3,2))


// Exercise 2
function multiply(a,b) {
    return a * b
}
console.log(multiply(1,2))
console.log(multiply(2,2))


// Exercise 3
function double(x) {
    return x * 2
}
console.log(double(2))
console.log(double(5))


// Exercise 4
function nextDecade(year) {
    return year + 10
}
console.log(nextDecade(2020))
console.log(nextDecade(2000))


// Exercise 5
function nextYear(year) {
    return year + 1
}
console.log(nextYear(2000))
console.log(nextYear(2020))