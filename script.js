

const menu = document.querySelector(".menu");


const sideBar = document.querySelector(".side-bar");


menu.addEventListener('click',function(){
    sideBar.style.display = "flex";
})


const cross = document.querySelector(".cross");

cross.addEventListener('click',function(){
    sideBar.style.display = "none";
})