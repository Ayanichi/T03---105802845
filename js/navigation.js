// navigation.js
// Handles two small UX touches shared by every page:
//   1. Marks the current page's nav link so screen readers/CSS know it's active,
//      and adds a short fade-out transition when clicking to a different page.
//   2. Makes the logo scroll smoothly to the top when already on the home page.

document.addEventListener("DOMContentLoaded", () => {
  // Figure out which HTML file we're currently viewing, e.g. "about.html".
  // Falls back to "index.html" for the root URL ("/").
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const destination = link.getAttribute("href");

    // Tell assistive tech which nav link matches the page we're on.
    if (destination === current) link.setAttribute("aria-current", "page");

    // On click: briefly fade the page out before navigating away,
    // unless we're already on that page (nothing to do).
    link.addEventListener("click", (e) => {
      if (!destination || destination === current) return;
      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(() => (window.location.href = destination), 140);
    });
  });

  // Clicking the logo while already on the home page scrolls to the top
  // instead of reloading the page.
  const logo = document.querySelector(".logo-link");
  if (logo && current === "index.html")
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

  // Image carousel functionality
  document.querySelectorAll(".image-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const dotsWrap = carousel.querySelector(".carousel-dots");
    let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to image ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  carousel.querySelector(".prev").addEventListener("click", () => goTo(index - 1));
  carousel.querySelector(".next").addEventListener("click", () => goTo(index + 1));
  });

});
