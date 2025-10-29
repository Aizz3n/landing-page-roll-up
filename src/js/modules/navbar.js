export function initNavbar() {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarOverlay = document.getElementById("navbar-overlay");

  if (!toggleButton || !navbarMenu || !navbarOverlay) return;

  const onToggleClick = () => {
    const isActive = navbarMenu.classList.toggle("active");
    toggleButton.classList.toggle("active");
    navbarOverlay.classList.toggle("active");
    toggleButton.setAttribute("aria-expanded", isActive);
  };

  toggleButton.addEventListener("click", onToggleClick);

  document.addEventListener("click", (e) => {
    if (!navbarMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      navbarMenu.classList.remove("active");
      toggleButton.classList.remove("active");
      navbarOverlay.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });

  const menuLinks = document.querySelectorAll(".navbar-list a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      toggleButton.classList.remove("active");
      navbarOverlay.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navbarMenu.classList.remove("active");
      toggleButton.classList.remove("active");
      navbarOverlay.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
}
