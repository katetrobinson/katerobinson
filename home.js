const hamburger = document.querySelector(".hamburger");
const navmenu  = document.querySelector(".nav-menu ");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu .classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click", () => {
    hamburger.classList.remove("active")    
    navmenu.classList.remove("active")
}))




// const navlinkwork = document.querySelector(".nav-linkwork");
// const sublist = document.querySelector(".sublist");

// navlinkwork.addEventListener("click",() => {
//     navlinkwork.classList.toggle("active");
//     sublist.classList.toggle("active");

// })

// document.querySelectorAll(".nav-linkwork").forEach(n=> n.addEventListener("click", () => {
//     navlinkwork.classList.remove("active")    
//     sublist.classList.remove("active")    

// }))
