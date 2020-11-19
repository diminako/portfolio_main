//  mobile menu
var projects = [
    {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    }
]
var burgerIcon = document.querySelector("#burgerIcon");
var navbarMenu = document.getElementById("navLinks")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});