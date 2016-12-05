

function toggleMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu = document.getElementById('menu_button');
  
  if (menu.className == "closed_menu") {
      menu.className = "opened_menu";
	  bouton_menu.style.backgroundImage = "url(\'../img/opened_menu_alpha_50px.png\')";
  }
  else if (menu.className == "opened_menu") {
      menu.className = "closed_menu";
	  bouton_menu.style.backgroundImage = "url(\'../img/closed_menu_alpha_50px.png\')";
  }
}