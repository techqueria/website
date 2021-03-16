import lozad from "lozad";

// Initialize library
lozad(".lozad", {
  load: function(el) {
    el.src = el.dataset.src;
    el.onload = function() {
      el.classList.add("blur");
    };
  }
}).observe();
