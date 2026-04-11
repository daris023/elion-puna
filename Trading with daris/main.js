document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").textContent =
    "Message validated ✔ Backend connection is next.";
});
