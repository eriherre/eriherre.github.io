document.addEventListener("DOMContentLoaded", function () {
  highLightMenu();
});

function highLightMenu() {
  var path = window.location.pathname;
  var page = path.split("/")[1] || "index"; 
  var menu = document.getElementById("menu-" + page);

  if (menu) {
    menu.classList.add("menu-selected");
  } else {
    console.warn("Menu item not found for page:", page);
  }
}
