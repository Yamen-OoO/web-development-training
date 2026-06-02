// BOM
//1- window object
console.log(window.innerWidth , window.innerHeight , window.outerHeight , window.scrollX , window.scrollY)
console.log(window.screen.width)
console.log(window.screen.height)
function reloadPage(){
    window.location.reload()
}
function goBack(){
    // ! check again
    // window.location.
}
function goToGoogle(){
    window.location.href='https://www.google.com'
}

function showAlert(){
    window.alert("this is alert message!")
}

function showConfirm(){
    let result = confirm("are you suure?")
    let bomOutput = document.querySelector("#bomOutput").innerHTML = `you clicked : ${result ? "OK" : "Cancel"}`
    
}

function showPrompt(){
    let name = window.prompt('Enter your name:')
    let bomOutput = document.querySelector("#bomOutput")
    if(name){
        bomOutput.innerHTML = `Hello ${name}`
    }

}


//2- timining functions
let timeInterval = null;
let count = 0
function startTimer(){
    if (timeInterval) return
    timeInterval =  setInterval(()=>{
        count++
        document.querySelector("#timerDisplay").textContent = count
    } , 1000)
}

function stopTimer(){
    if(timeInterval){
        clearInterval(timeInterval)
        timeInterval = null
    }
}


//3- localstorge
function saveToLocal(){
    let data = document.querySelector("#saveData").textContent
    console.log(data)
    localStorage.setItem('myData' , data)
    alert("saved to loacal storge")
}

window.addEventListener("load" , ()=>{
    let bomOutput = document.querySelector("#bomOutput")
    let data = localStorage.getItem('myData')
    bomOutput.innerHTML = data
})


