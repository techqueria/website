// External Links
const anchors = document.querySelectorAll(".content a, .navbar-menu a");
// Loop through and add blank target and noopener rel
for (let i = 0; i < anchors.length; i++) {
  if (anchors[i].hostname !== window.location.hostname) {
    anchors[i].target = "_blank";
    anchors[i].rel = "noopener";
  }
}
