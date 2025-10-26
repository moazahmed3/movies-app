const navbar = document.querySelector(".navbar");


// scroll navbar
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) { 
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});