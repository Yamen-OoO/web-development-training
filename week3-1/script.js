// Dom 
//1- access to elements
const title = document.getElementById('title')
const button = document.getElementsByClassName('btn')[0]
const firstli = document.querySelector("#list li")
const allItems = document.querySelectorAll("#list li")[1]
console.log(title , button , firstli , allItems)


let content = document.getElementById('content');
console.log(content)

//2- Update content
// content.textContent = '<h1>hello world</h1>'
content.innerHTML = '<h1>hello world</h1>'
// console.log(content.innerHTML)
// console.log(content.textContent)
console.log(content.innerText)

//3- classes modifation
let box = document.querySelector('.box')
console.log(box.classList)
box.classList.add('highlight')
box.classList.remove('highlight')


//4- style chaning
box.style.backgroundColor = 'red';


//5- add new elements
function addItem(){
    const list = document.querySelector("#list")
    let newItem = document.createElement("li")
    newItem.textContent = `Item ${list.children.length + 1}`
    list.appendChild(newItem)
}

//6- remove elements
function removeItem(){
    const list = document.querySelector("#list")
    if(list.children.length > 0){
        list.removeChild(list.lastElementChild)
    }
}


//7- elements events
let styleBtn = document.querySelector('#styleBtn')
styleBtn.addEventListener('click' , ()=>{
    box.style.borderRadius = '50%'
})
window.addEventListener("scroll" , ()=>{
    console.log(window.scrollY)
})
