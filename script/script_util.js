function getTopOffset(elementId) {
  var element = document.getElementById(elementId);
  var offsets = element.getBoundingClientRect();
  var top = offsets.top;
  return top;
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
  window.scrollTo(0, getTopOffset(anchorName) - 110); /* 110 == headerSize + 20 */
}