//!1. Synchronous JavaScript (Sync)
// Definition: Code that executes line by line in sequence.
//  Each operation must complete before the next one starts. If one operation takes time, everything else waits (blocks).


// console.log('step 1')
// console.log('step 2 is processing')
// console.log('step 3')



// console.log('step 4')
// for(let i = 0 ; i <= 100000000000000 ; i++){
//     if(i ===100000000000000) console.log('operation is done')
// }
// console.log('step 5')


// ==============================================================================================================

//! 2. Asynchronous JavaScript (Async)
// Definition: Code that can start a slow operation and continue running other code while waiting.
// The slow operation finishes later without blocking the main thread.
// // single thrid language = one call stack
// //async example 
// console.log('step 1 start')

// setTimeout(()=>{
//     console.log('step 3 : this runs after 3 secons')
// })
// console.log('step 2')

// sync code : blocking code : alert() , confirm() , while loop , for loop , readfilesync , console.log
// async code : non blocking code : setTimeout() , fetch() , addEventListner() , promise , async await




// ==============================================================================================================
//! 3. Callbacks
// Definition: A function that is passed as an argument to another function and is executed after that function completes.
// Callbacks are the traditional way to handle asynchronous operations.



// function doSomething(callback){
//     console.log("do something")
//     callback()
// }
// function afterDone(){
//     console.log("callback executed")
// }
// doSomething(afterDone)


// function step1(callback){
//     setTimeout(()=>{
//         console.log('step 1 is completed')
//         callback()
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log('step 2 is ompleted')
//         callback()
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log('step 3 is completed')
//         callback()
//     },1000)
// }


// // CALLBACK HELL 
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('all steps are done')
//         })
//     })
// })



// ==============================================================================================================
//! 4. Promises
// Definition: An object that represents the eventual completion (success) or failure (error) of
// an asynchronous operation. Promises have three states: pending, fulfilled (success), rejected (error).
// They solve callback hell by allowing chaining.

// promises //pending // success // reject

// const myPromise = new Promise((resolve , reject)=>{
//     let success = false

//     setTimeout(()=>{
//         if(success){
//             resolve({id:1 , name:"yamen"}) // success
//         }else{
//             reject('something went wrog!') // failure
//         }
//     },2000)
// })



// myPromise.then(result =>{
//     console.log('Success' , result)
// }).catch(error =>{
//     console.log("Error" , error)
// }).finally(()=>{
//     console.log('promise completed')
// })
// console.log('promise is Pending.....')






// function step1(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 1 complete')
//             resolve()
//         },1000)
//     })
// }

// function step2(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 2 complete')
//             resolve()
//         },1000)
//     })
// }

// function step3(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 3 complete')
//             resolve()
//         },1000)
//     })
// }

// step1().then(()=> step2()).then(()=>step3()).then(()=> console.log('all steps done!'))

// Promise.all
// const promise1 = Promise.resolve("first")
// const promise2 = new Promise(reject => setTimeout(()=> reject('error'), 2000 ))
// const promise3 = Promise.resolve("third")


// all promises excuted once
// Promise.all([promise1 , promise2 , promise3]).then(results =>{
//     console.log('all finished' , results)
// })

//
// Promise.race([promise1 , promise2]).then(result => console.log(result))



// ==============================================================================================================

//! 5. AJAX (Asynchronous JavaScript And XML)
// Definition: A technique that allows web pages to send and receive data from a server asynchronously without reloading the page.
// Despite the name, modern AJAX uses JSON, not XML.
// Old technique to fetch data


// function loadDataWithAJAX() {
//     const xhr = new XMLHttpRequest();
    
// //     // Configure the request
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    
// //     // What happens when data arrives
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             console.log('AJAX Data:', data);
//         } else {
//             console.log('AJAX Error:', xhr.status);
//         }
//     };
    
// //     // Handle network errors
//     xhr.onerror = function() {
//         console.log('Network error!');
//     };
    
// //     // Send the request
//     xhr.send();
//     console.log('Request sent, waiting for response...');
// }

// loadDataWithAJAX();




// ==============================================================================================================

//! 6. Fetch API
// Definition: A modern, promise-based replacement for AJAX. Fetch provides a cleaner,
// more powerful way to make HTTP requests and handle responses.
// It's built into modern browsers and uses promises by default.

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))



//ES async/await

// async function getDataWithFetch() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         let data = await response.json()
//         console.log(data)
//         displayData(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getDataWithFetch()


// function displayData(data){
//     let heading = document.createElement("h1")
//     heading.textContent = data.title
//     document.body.appendChild(heading)
// }