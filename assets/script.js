//  mobile menu
var projects = [
    {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    },
    {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    },
    {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    }, {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    }, {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    }, {
        name: "something",
        url: "https://www.google.com",
        image: "https://via.placeholder.com/150",
        github: "https://www.google.com"
    },
]
var burgerIcon = document.querySelector("#burgerIcon");
var navbarMenu = document.getElementById("navLinks")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});

for (let i = 0; i < projects.length; i++) {
    var messageBox = $("<article class='message'>")
    var upperBox = $("<div class='message-header'  data-project='proj_" + i + "' id='project_" + projects[i].name + "'>")
    var pUpperBox = $("<p>" + projects[i].name + "</p>")
    var btnUpperBox = $("<button><a href='" + projects[i].url + "'><i class='fab fa-github'></i></a></button>")
    var lowerBox = $("<div class='message-body'>FILL IN WITH IMG</div>")
    var pLowerBox = $("<p>One Sentence Description</p>")



    $("#portCardBox").append(messageBox)
    messageBox.append(upperBox)
    upperBox.append(pUpperBox)
    upperBox.append(btnUpperBox)
    messageBox.append(lowerBox)
    lowerBox.append(pLowerBox)


}

const generatePortfolio = () => {

}