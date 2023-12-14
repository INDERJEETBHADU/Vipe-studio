const Preload = document.getElementById("preload")
setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    Preload.classList.add("d-none")
}, "5000");
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
};
const nav = document.getElementById('mynav');


// footer_button
let mybutton = document.getElementById("footer_btn")
let mynav = document.getElementById("mynav")

window.onscroll = function () { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
        mynav.classList.add("nav-colored");
        mynav.classList.remove("nav-transparent");
    } else {
        mybutton.style.display = "none"
        mynav.classList.add("nav-transparent");
        mynav.classList.remove("nav-colored");
    }
}
function topfunction() {
    document.documentElement.scrollTop = 0;
}


