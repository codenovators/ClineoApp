// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500); // loader stays 1.5s minimum
});

// Sticky Header Shadow
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Optional: Smooth loader on internal links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    e.preventDefault();
    const loader = document.getElementById("page-loader");
    loader.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // open/close menu
  hamburger.classList.toggle("open"); // animate hamburger
});

// Optional: Close menu when clicking a link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});
