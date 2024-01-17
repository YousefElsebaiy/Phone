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
let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")
let t4 = document.getElementById("t4")
let button = document.getElementById("button")
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
p1.addEventListener("click", function(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
})
p2.addEventListener("click", function(){
    window.scroll({
        top: 600,
        behavior: "smooth",
    })
})
button.addEventListener("click", function(){
    window.scroll({
        top: 600,
        behavior: "smooth",
    })
})
p3.addEventListener("click", function(){
    window.scroll({
        top: 1000,
        behavior: "smooth",
    })
})
p4.addEventListener("click", function(){
    window.scroll({
        top: 2000,
        behavior: "smooth",
    })
})
function country(){
    if(form1.t1.value == ""){
        alert("من فضلك ادخل بريدك الالكتروني")
        return false
    }
    if(form1.t2.value == ""){
        alert("من فضلك ادخل الرقم السري")
        return false
    }
    if(form1.t3.value == ""){
        alert("من فضلك ادخل  رقم الهاتف")
        return false
    }
    if(form1.t4.value == ""){
        alert("من فضلك ادخل موقعك الجغرافي")
        return false
    }
    if(isNaN(form1.t3.value)){
        alert("ادخل قيمة عددية")
        return false
    }
}