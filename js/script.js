function footer_tog(i) {
  let fcr_content = document.querySelectorAll(".fcr_content");
  let fcr_icon = document.querySelectorAll(".icon");
  fcr_content[i].classList.toggle("hide");
  fcr_icon[i].classList.toggle("rotate");
}



function navbar() {
  let navbar = document.querySelector(".nav-logo-right");
let ham_nav = document.querySelector(".ham_cont");
  let ham = navbar.lastElementChild
  ham.outerHTML = `<ion-icon name="close-outline" class="hamburger" onclick="closenav()"></ion-icon>`
  ham_nav.style.height = "100%";
}

function closenav() {
  let navbar = document.querySelector(".nav-logo-right");
let ham_nav = document.querySelector(".ham_cont");
  let ham = navbar.lastElementChild

  ham.outerHTML = `<ion-icon name="menu-outline" class="hamburger" onclick="navbar()"></ion-icon>`
  ham_nav.style.height = "0%";
}
