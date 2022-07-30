var navigation = document.createElement("style");
navigation.textContent = `
/* navigation */
#navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: all 200ms ease-in-out;
}

#navigation h1,
.secondary-navigation a {
  font-family: "Rubik", sans-serif;
  color: #121212;
  text-decoration: none;
}

.nav-controler span {
  display: none;
}
.nav-controler {
  display: none;
}
#navigation h1 {
  font-weight: 900;
  letter-spacing: 1.8px;
}

.secondary-navigation a {
  font-weight: 500;
  letter-spacing: 0.5px;
}

.secondary-navigation {
  list-style: none;
  display: flex;
}

.secondary-navigation li {
  margin: 0px 12px;
  text-decoration: none;
}

@media (max-width: 320px) {
}

@media (max-width: 375px) {
}

@media (max-width: 420px) {
}

@media (max-width: 480px) {
}

@media (max-width: 560px) {
}

@media (max-width: 640px) {
}

@media (max-width: 768px) {
  #navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    position: fixed;
    width: 100%;
    z-index: 999;
    transition: all 200ms ease-in-out;
  }
  .primary-navigation {
    position: fixed;
    inset: 0 0 0 30%;
    background: steelblue;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    z-index: 1000;
    transform: translateX(100%);
    transition: 200ms ease;
  }
  .primary-navigation[data-visible="true"] {
    transform: translateX(0%);
  }
  .nav-controler {
    aspect-ratio: 1;
    width: 2.5rem;
    z-index: 9999;
    background: url("Navbar.svg");
    background-repeat: no-repeat;
    border: 0;
    margin: 0px 0px 0px 120px;
    display: block;
  }
  #navigation .primary-navigation .secondary-navigation {
    position: fixed;
    flex-direction: column;
    padding: min(20vh, 10rem) 2em;
  }
  #navigation .primary-navigation .secondary-navigation li {
    padding: 5px;
    margin: 25px 20px;
  }
  #navigation .primary-navigation .secondary-navigation li a {
    color: #121212;
    font-weight: 900;
  }
}

@media (max-width: 1024px) {
}

@media (max-width: 1280px) {
}

@media (max-width: 1536px) {
}

`;
document.head.appendChild(navigation);

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-controler");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
  }
});
