document.querySelectorAll(".site-header--nav-inline").forEach((header) => {
  const toggleButton = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".header-nav");

  if (!toggleButton || !nav) return;

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("is-open", !isExpanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".nav-toggle").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".header-nav").forEach((nav) => {
      nav.classList.remove("is-open");
    });
  }
});
