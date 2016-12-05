

// http://w3c.github.io/html/single-page.html#embedding-custom-non-visible-data-with-the-data-attributes
function toggleMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu = document.getElementById('menu_button');
  var page = document.getElementById('page');

  if (menu.dataset.state == "closed_menu") {
    openMenu();
  }
  else if (menu.dataset.state == "opened_menu") {
    closeMenu();
  }
}

function closeMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu = document.getElementById('menu_button');
  var page = document.getElementById('page');

  menu.dataset.state = "closed_menu";
  menu.style.width = "0px";
  menu.style.borderRight = "0px solid #00FFFF";

  bouton_menu.style.backgroundImage = "url(\'../img/closed_menu_alpha_50px.png\')";
  
  page.style.marginLeft = menu.style.width;
}

function openMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu = document.getElementById('menu_button');
  var page = document.getElementById('page');

  menu.dataset.state = "opened_menu";
  menu.style.width = "300px";
  menu.style.borderRight = "2px solid #00FFFF";

  bouton_menu.style.backgroundImage = "url(\'../img/opened_menu_alpha_50px.png\')";
  
  page.style.marginLeft = menu.style.width;
}