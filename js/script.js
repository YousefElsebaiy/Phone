let menu = document.getElementById("menu")
let links = document.getElementById("links")
let first = document.getElementById("first")
let center = document.getElementById("center")
let last = document.getElementById("last")
let nav = document.getElementById("nav")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
menu.onclick = function(){
    links.classList.toggle("active")
    first.classList.toggle("first")
    center.classList.toggle("center")
    last.classList.toggle("last")
}
window.onscroll = function(){
    let value = scrollY
    if(value > 50){
        nav.style.border = "2px solid blueviolet"
        links.style.border = "2px solid blueviolet"
    }
    else{
        nav.style.border = "2px solid white"
        links.style.border = "2px solid white"
    }
}
p1.addEventListener("mouseenter", function(){
    p1.style.border = "2px solid blueviolet"
    p1.style.backgroundColor = "blueviolet"
    p1.style.color = "white"
})
p2.addEventListener("mouseenter", function(){
    p2.style.border = "2px solid blueviolet"
    p2.style.backgroundColor = "blueviolet"
    p2.style.color = "white"
})
p3.addEventListener("mouseenter", function(){
    p3.style.border = "2px solid blueviolet"
    p3.style.backgroundColor = "blueviolet"
    p3.style.color = "white"
})
p4.addEventListener("mouseenter", function(){
    p4.style.border = "2px solid blueviolet"
    p4.style.backgroundColor = "blueviolet"
    p4.style.color = "white"
})
p1.addEventListener("mouseleave", function(){
    p1.style.border = "2px solid white"
    p1.style.backgroundColor = "white"
    p1.style.color = "blueviolet"
})
p2.addEventListener("mouseleave", function(){
    p2.style.border = "2px solid white"
    p2.style.backgroundColor = "white"
    p2.style.color = "blueviolet"
})
p3.addEventListener("mouseleave", function(){
    p3.style.border = "2px solid white"
    p3.style.backgroundColor = "white"
    p3.style.color = "blueviolet"
})
p4.addEventListener("mouseleave", function(){
    p4.style.border = "2px solid white"
    p4.style.backgroundColor = "white"
    p4.style.color = "blueviolet"
})
p1.addEventListener()