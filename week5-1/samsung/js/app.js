let menu = document.querySelector("nav .menu")
let list = document.querySelector("nav .list")

menu.onclick = function(){
        list.style.left = "0"
        document.body.style.height = "100vh"
        document.body.style.overflow = "hidden"
}
document.addEventListener("click",function(e){
    if(e.target.classList.contains("close")){
        list.style.left = "-100%"
        document.body.style.height = "auto"
        document.body.style.overflow = "auto"
    }
})