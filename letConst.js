// we are using const because we don't want to change the value of the variable
// we can change the value of the array but we can't change the array
// we can't change the value of the object but we can change the object

const name = "wasif"
console.log(name)

const number = [1, 2, 3, 4, 5]

number[1] = 10

// number.push(6)
console.log(number)

// we are using let because we want to change the value of the variable
// we can change the value of the array but we can't change the array
// we can't change the value of the object but we can change the object

let name1 = "wasif"
name1 = "wasif zaman"
console.log(name1)

let sum = 0
for(let i = 0; i < 10; i++){
    sum = sum + i
}

console.log(sum)


