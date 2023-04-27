// es6 default parameter
// most useful for function parameter
function add(num1, num2 = 0) {
    return num1 + num2
}

const result1 = add(10)
console.log(result1)

// old way to set default parameter
function add(num1, num2) {
    if(num2 === undefined) {
        num2 = 0
    }
    return num1 + num2
}

const result = add(10) 
console.log(result)

// another old way to set default parameter
function add(num1, num2) {
    num2 = num2 || 5
    return num1 + num2
}

const result2 = add(10)
console.log(result2)
