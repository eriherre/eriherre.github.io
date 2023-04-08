$(function() {
    $('#libraries').load('libraries.html');
    $('#header').load('header.html');
    $('#footer').load('footer.html');
});

function hover(img) {

    switch(img.id)
    {
        case "vrId":
            img.src = "images/virtual-reality-neon.png";
            break;

        case "mrId":
            img.src = "images/mixed-reality-neon.png";
            break;

        case "360Id":
            img.src = "images/360-neon.png";
            break;

        case "gamesId":
            img.src = "images/games-neon.png";
            break;

        case "e-learningId":
            img.src = "images/e-learning-neon.png";
            break;

        case "allProjectsId":
            img.src = "images/all-projects-neon.png";
            break;
    }
}

function hoverOut(img) {

    switch(img.id)
    {
        case "vrId":
            img.src = "images/virtual-reality.png";
            break;

        case "mrId":
            img.src = "images/mixed-reality.png";
            break;

        case "360Id":
            img.src = "images/360.png";
            break;

        case "gamesId":
            img.src = "images/games.png";
            break;

        case "e-learningId":
            img.src = "images/e-learning.png";
            break;

        case "allProjectsId":
            img.src = "images/all-projects.png";
            break;
    }
}

