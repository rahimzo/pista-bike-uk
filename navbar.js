// navbar.js — Enhanced Caffè Necto Navigation

document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <nav class="navbar glassy fade-in">
      <div class="nav-container">
        <a href="index.html" class="logo">Caffè Necto</a>

        <ul class="nav-links">
          <li><a href="https://rahimzo.github.io/pista-bike-uk/index.html">Home</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/menu.html">Menu</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/gallery.html">Gallery</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/about.html">About</a></li>
          <li><a href="https://rahimzo.github.io/pista-bike-uk/contact.html">Contact</a></li>
        </ul>

        <div class="menu-toggle" id="mobile-menu">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbar);

  const menuToggle = document.getElementById("mobile-menu");
  const navLinks   = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });
});
