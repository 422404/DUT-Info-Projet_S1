
// http://w3c.github.io/html/single-page.html#embedding-custom-non-visible-data-with-the-data-attributes
function toggleMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu = document.getElementById('menu_button');
  
  if (menu.dataset.state == "closed_menu") {
      menu.dataset.state = "opened_menu";
	  menu.style.width = "300px";
	  menu.style.borderRight = "2px solid white";
	  bouton_menu.style.backgroundImage = "url(\'../img/opened_menu_alpha_50px.png\')";
  }
  else if (menu.dataset.state == "opened_menu") {
      menu.dataset.state = "closed_menu";
	  menu.style.width = "0px";
	  menu.style.borderRight = "0px solid white";
	  bouton_menu.style.backgroundImage = "url(\'../img/closed_menu_alpha_50px.png\')";
  }
}