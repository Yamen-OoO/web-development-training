// // numbers and methods
// let integer = 42
// let float = 4.5
// let negative = -10

// console.log(typeof integer)

// let notANumber = "x"
// console.log(typeof notANumber)
// console.log(Number(notANumber))
// console.log(typeof NaN)


// let num = 255
// console.log(num.toString())


// let price = 19.558
// console.log(price.toFixed(2))


// console.log(parseInt("42"))
// console.log(parseInt("42.5"))
// console.log(parseInt("42px"))
// console.log(parseInt("px42px"))
// console.log(parseInt("abc"))

// console.log(isNaN("hello")) // true
// console.log(isNaN(10)) // false
// console.log(isNaN("10"))


// console.log(Math.round(4.7))
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.8))

// console.log(Math.abs(-5))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(27))

// console.log(Math.max(1,5,8,3,9))
// console.log(Math.min(1,5,8,3,9))

// console.log(Math.random())
// console.log((Math.random() * 10).toFixed()) // 0 - 9
// console.log(((Math.random() * 10)+ 1).toFixed()) // 0 - 10



// // * strings and methods

// let text = 'Hellow World'
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())


// let userInput = '      yamen      '
// let cleanInput = userInput.trim().toUpperCase()
// console.log(cleanInput)


// let str = 'Javascript'
// console.log(str.charAt(0))
// console.log(str.charAt(3))
// console.log(str.charAt(20))

// console.log(str[0])
// console.log(str[3])


// let sentence = 'hello from js course'
// console.log(sentence.indexOf("js"))
// console.log(sentence.indexOf("o"))
// console.log(sentence.indexOf("o" , 5))
// console.log(sentence.lastIndexOf("o"))
// console.log(sentence.includes('js'))

// let text1= 'javascript is awseome'
// console.log(text1.slice(0,5))
// console.log(text1.slice(4,10))
// console.log(text1.slice(-7 , -1))


// let text3 = 'world hello world'
// console.log(text3.replace('world' , 'javascript'))
// console.log(text3.replaceAll('world' , 'javascript'))


// let text4 = 'apple,banana,orange'
// let fruits = text4.split(",")
// console.log(fruits)

// let x = 'ha'
// console.log(x.repeat(10))
// console.log(x.concat(' ' , 'world'))
// console.log(x.length)



// // * Array and methods

// let fruits = ['apple' , 'banana' , 'orange']
// let number = [1,2,3,4]
// let mixed = ['hello' , null , true , [1,2]]
// let empty = []

// let numbers = [1,2,3,4,5,6,7,8,9]
// console.log(numbers.length)
// console.log(numbers[0])
// console.log(numbers[numbers.length - 1])

// console.log(fruits.push('kiwi' , 'lemon'))
// console.log(fruits.unshift('watermelon'))
// console.log(fruits)


// console.log(fruits.shift())
// console.log(fruits)

// console.log(fruits.pop())
// console.log(fruits)


// console.log(fruits.indexOf('apple'))
// console.log(fruits.indexOf('orange' , 1))

// let newFruitsArray = fruits.slice(1,3)
// console.log(newFruitsArray)
// console.log(fruits)


// let removed = fruits.splice(1,1)
// console.log(removed)
// console.log(fruits)


// fruits.splice(1,0 , 'kiwi' , 'apple')
// console.log(fruits)




// let num1 = [1,2,3,4]
// let num2 = [5,6,7]
// let combined = num1.concat(num2 , 8,9,10)
// console.log(combined)


// let num3 = [1,2,3,4]
// console.log(num3.join('_'))


// console.log(Array.isArray(5))
// console.log(Array.isArray(num3))



// * objects

let person = {
    name : "yamen",
    age : 24,
    isStudent : false
}
console.log(person)


let car = new Object() // let car = {}
car.year = 2001
car.brand = 'toyta'
console.log(car)


const book  = {title : "javascript" , pages : 300}
// dot notation
console.log(book.title)
console.log(book.pages)

// bracket notation
const key = 'pages' // for dynamic values
console.log(book[key])



let student  = {name : 'ali'}
student.age = 28 // add new property
student.name = 'hadel' // update property
console.log(student)




const Calculator = {
    a : 10,
    b : 5,
    add : function(){
        return this.a + this.b
    },
    multiply(){
        return this.a * this.b
    }
}
console.log(Calculator.a)
console.log(Calculator.b)
console.log(Calculator.add())
console.log(Calculator.multiply())


const company = {
    name : "spotcode",
    address : {
        city : 'damascus'
    },
    employees : ['yamen' , 'owis' , 'christina']
}
console.log(company.address.city)
console.log(company.employees[1])



const person2 = {name:'yamen' , age:24 , city:'damascus'}
let {name , age} = person2
console.log(name , age)
name = 'ahmad'
console.log(name)
console.log(person2)

const obj1  = {a : 1 , b : 2}
const obj2 = {c : 3 , d : 4}

const merged = {...obj1 , ...obj2}
console.log(merged)

const copy = {...obj1}
console.log(copy)


const product = {id : 1 , name : 'laptop' , price : 99}
console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))




for(let [key , value] of Object.entries(product)){
    console.log(key + ":" + value)
}


// refrence vs value
let a = 10
let b = a
b = 20
console.log(b)


let obja = {name : 'yamen'}
let objb = obja
console.log(obja)
console.log(objb)
objb.name = 'ahmad'

console.log(obja)
console.log(objb)



let array1 = [1,2,3]
let array2 = [1,2,3]

console.log(array1 === array2)


let obj3 = {name: 'ahmad'}
let obj4 = {name: 'ahmad'}
console.log(obj3 === obj4)