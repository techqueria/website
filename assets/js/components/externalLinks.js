// External Links
const anchors = document.querySelectorAll(".content a, .navbar-menu a");
// Loop through and add blank target and noopener rel
for (let i = 0; i < anchors.length; i++) {
  const anchorLink = anchors[i].hostname;
  const localHost = window.location.hostname;
  const eventHost = "events.techqueria.org";
  const internalLink = anchorLink === localHost || anchorLink === eventHost;
  if (!internalLink) {
    anchors[i].target = "_blank";
    anchors[i].rel = "noopener";
  }
}
