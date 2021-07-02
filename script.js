//Script for menu icon
let menuIcon = document.getElementById("menuIcon");
let navBar = document.getElementById("navBar");
let hideBtn = document.getElementById("hideNavBtn");

function changeNav() {
    navBar.style.display = "block";
    menuIcon.style.display = "none";
}

function closeNav(){
    navBar.style.display = "none";
    menuIcon.style.display = "inline-block";
}