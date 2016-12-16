/* for the main menu on pages */
// http://w3c.github.io/html/single-page.html#embedding-custom-non-visible-data-with-the-data-attributes
function toggleMenu() {
  var menu = document.getElementById('menu');

  if (menu.dataset.state == "closed_menu") {
    openMenu();
  }
  else if (menu.dataset.state == "opened_menu") {
    closeMenu();
  }
}

function closeMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu_icon = document.getElementById('menu_button_icon');
  var page = document.getElementById('page');

  menu.dataset.state = "closed_menu";
  menu.style.left = "-300px";
  bouton_menu_icon.className = "fa fa-bars";
  page.style.marginLeft = "0px";
}

function openMenu() {
  var menu = document.getElementById('menu');
  var bouton_menu_icon = document.getElementById('menu_button_icon');
  var page = document.getElementById('page');

  menu.dataset.state = "opened_menu";
  menu.style.left = "0px";
  bouton_menu_icon.className = "fa fa-close";
  page.style.marginLeft = "300px";
}

/***************************************************************************************/
/* for the anchors menu on certain pages */
function toggleAnchorsMenu() {
  var menu_anchors = document.getElementById('menu_anchors');

  if (menu_anchors.dataset.state == "closed_menu") {
    openAnchorsMenu();
  }
  else if (menu_anchors.dataset.state == "opened_menu") {
    closeAnchorsMenu();
  }
}

function closeAnchorsMenu() {
  var menu_anchors = document.getElementById('menu_anchors');
  var menu_anchors_title_arrow = document.getElementById('menu_anchors_title_arrow');

  menu_anchors.dataset.state = "closed_menu";
  menu_anchors.style.maxHeight = "30px";
  menu_anchors_title_arrow.className = "fa fa-caret-down";
}

function openAnchorsMenu() {
  var menu_anchors = document.getElementById('menu_anchors');
  var menu_anchors_title_arrow = document.getElementById('menu_anchors_title_arrow');

  menu_anchors.dataset.state = "opened_menu";
  menu_anchors.style.maxHeight = "100%";
  menu_anchors_title_arrow.className = "fa fa-caret-up";
}

// fix the max-height issue when anchors menu is opened-closed and then the page is resized > 600px
function anchorsMenuFixup() {
  var menu_anchors = document.getElementById('menu_anchors');

  if (window.matchMedia("(min-width:600px)").matches) {
    menu_anchors.style.maxHeight = "100%";
  }
  if (window.matchMedia("(max-width:600px)").matches && menu_anchors.dataset.state == "closed_menu") {
    menu_anchors.style.maxHeight = "30px";
  }
}