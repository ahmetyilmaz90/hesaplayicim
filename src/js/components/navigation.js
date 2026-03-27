export function initNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector(".nav-list");
  const main = document.querySelector("main");
  const navGroups = document.querySelectorAll(".nav-group");

  if (!toggle || !navList || !main) return;

  /* Burger toggle */
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navList.classList.toggle("active");
    main.classList.toggle("notactive");
  });

  /* Mobile dropdown */
  navGroups.forEach(group => {
    group.addEventListener("click", () => {
      if (window.innerWidth >= 1300) return;

      navGroups.forEach(g => {
        if (g !== group) g.classList.remove("open");
      });

      group.classList.toggle("open");
    });
  });
}
