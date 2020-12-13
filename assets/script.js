//  mobile menu
var projects = [
    {
        name: "Retro Games Backlog",
        url: "https://cryptic-reaches-66396.herokuapp.com/",
        image: "https://raw.githubusercontent.com/diminako/retro_backlog/main/public/assets/images/screenshot.png",
        github: "https://github.com/diminako/retro_backlog",
        pitch: "A Full Stack Application utilizing mysql, node.js, and JavaScript."
    },
    {
        name: "Trail Weather Tracker",
        url: "https://diminako.github.io/trail-weather-tracker/",
        image: "https://raw.githubusercontent.com/diminako/trail-weather-tracker/main/assets/screenshot.png",
        github: "https://github.com/diminako/trail-weather-tracker",
        pitch: "An App utilizing API's to provide local hiking trails and weather."
    },
    {
        name: "Work Day Planner",
        url: "https://diminako.github.io/day-planner/",
        image: "https://raw.githubusercontent.com/diminako/day-planner/main/assets/screenshot.png",
        github: "https://github.com/diminako/day-planner",
        pitch: "A daily scheduler using local storage and time management."
    },
    // {
    //     name: "Do You Know JS?!",
    //     url: "https://diminako.github.io/do-you-know-javascript/",
    //     image: "https://raw.githubusercontent.com/diminako/do-you-know-javascript/main/assets/screenshot.png",
    //     github: "https://github.com/diminako/do-you-know-javascript",
    //     pitch: "A fun and quick JavaScript game to test your JS knowledge created with JS logic."
    // },
    {
        name: "Weather Dashboard",
        url: "https://diminako.github.io/weather_dashboard/",
        image: "https://raw.githubusercontent.com/diminako/weather_dashboard/main/assets/images/screenshot.png",
        github: "https://github.com/diminako/weather_dashboard",
        pitch: "A weather forecast App generated using Open Weather API."
    }
]
var burgerIcon = document.querySelector("#burgerIcon");
var navbarMenu = document.getElementById("navLinks")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});

for (let i = 0; i < projects.length; i++) {
    var messageBox = $("<article class='message messageBoxBackground'>");
    var upperBox = $("<div class='message-header'  data-project='proj_" + i + "' id='project_" + projects[i].name + "'>");
    var pUpperBox = $("<p>" + projects[i].name + "</p>");
    var btnUpperBox = $("<a href='" + projects[i].url + "' rel='noopener'><button><i class='fab fa-github'></i></button></a>");
    var lowerBox = $("<div class='message-body messageBackground'><a href='" + projects[i].github + "' rel='noopener'><img src='" + projects[i].image + "' width='200' height='200'></img></a></div>");
    var pLowerBox = $("<p class='pColor'><strong>" + projects[i].pitch + "</strong></p>");



    $("#portCardBox").append(messageBox);
    messageBox.append(upperBox);
    upperBox.append(pUpperBox);
    upperBox.append(btnUpperBox);
    messageBox.append(lowerBox);
    lowerBox.append(pLowerBox);
}