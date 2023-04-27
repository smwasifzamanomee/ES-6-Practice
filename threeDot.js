const ages1 = [5, 7, 9, 12]
const ages2 = [25, 19, 23]
const ages3 = [32, 45]

// const allAges = ages1.concat(ages2).concat(5).concat(ages3)
const allAges = [...ages1, ...ages2, 5, ...ages3]
console.log(allAges)

// another example 

const minister = 69
const business = 200
const shosib = 455

const takapoisha = [69, 299, 455]

// const maximun = Math.max(minister, business, shosib)

const maximun = Math.max(...takapoisha)

console.log(maximun)

