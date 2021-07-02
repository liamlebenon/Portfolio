//Script for menu icon
let menuIcon = document.getElementById("menuIcon");
let navBar = document.getElementById("navBar");
let hideBtn = document.getElementById("hideNavBtn");
let nav = document.getElementById("nav");
let windowSize = window.matchMedia( "(max-width: 1024px)" );

//Function to open the nav bar
function changeNav() {
        navBar.style.display = "block";
        menuIcon.style.display = "none";
}

menuIcon.addEventListener("click", changeNav);

//function to close the nav bar
function closeNav() {    
    navBar.style.display = "none";
    menuIcon.style.display = "inline-block";
}

hideNavBtn.addEventListener("click", closeNav);

//Function for mobile nav menu
function mobileCloseNav(){
    if(windowSize.matches) {
        navBar.style.display = "none";
        menuIcon.style.display = "inline-block";
    }
}

document.querySelectorAll(".navOption").forEach(elem => elem.addEventListener("click", mobileCloseNav));
//End of mobile nav menu function