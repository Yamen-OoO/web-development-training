// console.log(typeof "hello")
// console.log(typeof("hello"))
// console.log(typeof 5)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {a:"x"})
// console.log(typeof [1,2,3])


// let name = 'yamen'
// let age 
// age = 24

// name = 'ahmad'
// console.log(name)

// {
//     let message = "hello"
//     console.log(message)
// }



// const PI = 3.14
// PI = 20

// const person = {
//     name : "mouayad"
// }
// person.name = 'ahmad'
// console.log(person.name)



// var score = 100 
// score = 200
// var score = 300
// console.log(score)


// console.log(x)
// var x 
// console.log(y)
// const y 


// let userName = 'moaz'
// let user_age = 20
// let $price = "20$"
// let _private = true


// let 123name = "x"
// let function = 'hello'

// let name = 'moaz'
// let Name = 'yasser'

// let x , y ,z
// x = 5
// y =5 
// z=5
// let x = 4 , y = 5, z=0


//! concatenation
// let firstName = 'yamen'
// let lastName = "nasri"

// let fullName= firstName + " " +lastName
// console.log(fullName)



// let product = 'apple'
// let price = 10000
// let quantity = 4


// let recepit = `you bought ${quantity} ${product} for $ ${price*quantity}



// multiplelines
// `
// console.log(recepit)


// console.log(10 + 20)
// console.log(10 + "20")
// console.log("10" + "20")
// console.log(10 + 20 + "30")
// console.log("10" + 20 + 30)

// console.log(3 + 5)
// console.log(6 - 5)
// console.log(6 * 5)
// console.log(6 / 5)
// console.log(6 % 5) // 1
// console.log(6 ** 5)


// console.log(1 + "1")
// console.log(1 - "1")
// console.log( 1 * "1")
// console.log( 1 / "1")
// console.log( 1 ** "1")
// console.log(1 + "yamen")
// console.log(1 - "yamen")



// let number = 5
// console.log(number++) // 5
// console.log(number)
// console.log(number) // 6

// let number2 = 5
// console.log(++number2)
// console.log(number2)


// console.log(5)
// console.log(+"5")
// console.log(+true)
// console.log(+false)

// console.log(+null)
// console.log(+undefined)

// let userInput = "25"
// let age = +userInput
// console.log(age + 5)

// console.log(-5)
// console.log(-"5")
// console.log(-true)
// console.log(-false)

// console.log(-null)
// console.log(-undefined)

// console.log(!true)
// console.log(!false)

// console.log(!0)
// console.log(!1)
// console.log(!!0)
// console.log(!!1)

// console.log(!"")
// console.log(!"hello")

// let a = 10
// a = a + 20
// console.log(a)

// let b = 10
// b+= 100 // b = b + 100
// console.log(b)
// b-=10
// b*=10
// b/=10

// let temp = 5

// if(temp > 10){
//     console.log('its hot')
// }else{
//     console.log('its not hot')
// }


// let score = 50

// if(score >=90){
//     console.log("GRADE : A")
// }else if(score >= 80){
//         console.log("GRADE : B")
// }else if(score >= 70){
//         console.log("GRADE : C")
// }else if(score >= 60){
//         console.log("GRADE : D")
// }else{
//     console.log("GRADE : F")
// }



// == , === (values , data type , value)


// let num = 5
// let str = '5'
// console.log(num == str)
// console.log(num === str)

// if(50 > 40) return true

// == , === , != , !== , < , > , >= , <=

// let username = 'yamen'
// let password = 12
// if(username === "yamen" && password === 12){
//     console.log('logged in')
// }

// if (5 === "5"){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if (5 !== 5 && 5 === 5){
//     console.log(true)
// }else{
//     console.log(false)
// }


// let isMember = true
// let subscribed = false
// if(isMember && subscribed){
//     console.log('you are a member')
// }

// && , || , !

// condition ? truevalue : falsevalue

// let age = 20
// let canVote = age > 18 ? 'yes' : 'no'
// console.log(canVote)

// let number = 7
// let result = number % 2 === 0 ? "even" : 'odd'
// console.log(result)


// let fruit = 'apple'
// switch(fruit){
//     case "apple":
//         console.log('red fruit')
//         break
//     case "banana":
//         console.log('yellow fruit')
//         break
//     case "orange":
//         console.log('orange fruit')
//         break
//     default:
//         console.log('unkonw friut')
// }



// for(let i = 0 ; i<5 ; i++){
//     console.log(i)
// }



// let numberr = 5
// while( numberr < 10){
//     console.log(numberr)
//     numberr++
// }


// let i = 5;
// while (i < 10) {
// console.log(i);
// i++;
// }


// let i = 0;
// do  {
// console.log(i);
// i++;
// }while (i < 5);



function greet(){
    console.log('hello')
}
greet()


function sayHello(name , age){
    console.log('hello' + name + age)
}
sayHello('ali' , 24)


function area(l = 1 , w = 1){
    let area = l * w
    return area
}

console.log(area(5,5))
console.log(area(5))
console.log(area())


let greet1 = function(name){
    console.log('hello' , name)
}
greet1('yamen')


let add = (a,b) =>{
    console.log(a+b)
}
add(4,5)


let sub = (a,b)=> console.log(a-b)
sub(10,5)




function add2(...numbers){
    let total = 0
    console.log(numbers)
    for(let i =0 ;i< numbers.length ; i++){
        total = total + numbers[i]
    }
    console.log(total)
}

add2(4,2,1,4,6,4,31,5,6,3,2,3)