// navbar.js — Caffè Necto Navigation Script

document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <nav class="navbar fade-in transition-all">
      <div class="nav-container">
        <a href="index.html" class="logo hover-grow">Caffè Necto</a>
        <ul class="nav-links">
          <li><a href="https://rahimzo.github.io/pista-bike-uk/index.html" class="transition-all">Home</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/menu.html" class="transition-all">Menu</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/gallery.html" class="transition-all">Gallery</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/about.html" class="transition-all">About</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/contact.html" class="transition-all">Contact</a></li>
        </ul>
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbar);

  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  // Toggle for mobile menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Optional: add subtle shadow when scrolling
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
      nav.style.background = "#fffdf9";
    } else {
      nav.style.boxShadow = "none";
      nav.style.background = "transparent";
    }
  });
});
