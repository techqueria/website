// Font Awesome
// require("@fortawesome/fontawesome");
// require("@fortawesome/fontawesome-free-solid");
// require("@fortawesome/fontawesome-free-brands");

// Twemoji
import twemoji from "twemoji";

twemoji.parse(document.body, {
  folder: "svg",
  ext: ".svg"
});

// The following code is based off a toggle menu by @Bradcomp
// https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();
