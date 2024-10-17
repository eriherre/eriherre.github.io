document.addEventListener("DOMContentLoaded", function () {
  highLightMenu();
  footerData();
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

function footerData() {
  const currentYear = new Date().getFullYear();
  const footerText = `\u00A9 ${currentYear} Erika Herrera \u2014 Learning Designer`;
  document.getElementById("footerDescription").textContent = footerText;
}
