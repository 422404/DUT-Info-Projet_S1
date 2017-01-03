function getTopOffset(elementId) {
  var element = document.getElementById(elementId);
  var offset = element.offsetTop;
  return offset;
}

function debug_getTopOffset(elementId) {
  var off = getTopOffset(elementId);
  console.log(off);
  return off;
}

function jumpToAnchor(anchorName) {
  if (window.matchMedia("(max-width:600px)").matches && menu_anchors.dataset.state == "opened_menu") {
    closeAnchorsMenu();
  }
  window.page.scrollTop += getTopOffset(anchorName) - 20; // 110 == headerSize + 20
  console.log(page.scrollTop);
}