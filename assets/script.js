//  mobile menu

var burgerIcon = document.querySelector("#burgerIcon");
var navbarMenu = document.getElementById("navLinks")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});