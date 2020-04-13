const logoBox = document.querySelector(".header__logobox");

window.addEventListener("scroll", () => {
    const scrollpos = window.scrollY;

    if (scrollpos >= window.innerHeight * 0.2) {
        logoBox.classList.add("header__logobox--onScroll");
    } else {
        logoBox.classList.remove("header__logobox--onScroll");
    }
});

const slidesIn = document.querySelectorAll(".slideIn");
const sectionAbout = document.querySelector(".about__inner");

const addSlide = () => {
    slidesIn.forEach(slideIn => {
        const slideInAt =
            window.scrollY + window.innerHeight - slideIn.offsetHeight / 3;
        // console.log(slideInAt);
        const isShown = slideInAt > slideIn.offsetTop;
        const isHide = window.scrollY + window.innerHeight < slideIn.offsetTop;

        if (isShown) {
            slideIn.classList.add("active");
        } else if (isHide) {
            slideIn.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", addSlide);

//<<<<hamburger menu>>>>>

const hamburger = document.querySelector(".header__hamburger");
const navbar = document.querySelector(".header__navbar");
let tabPortWidth = window.matchMedia("(min-width:48em)");
const hamburgerButton = document.querySelector(".header__hamburger-button");
const links = document.querySelectorAll(".header__link");

const showNavbar = () => {
    navbar.classList.toggle("header__navbar--active");
    hamburgerButton.classList.toggle("header__hamburger-button--active");
};

hamburger.addEventListener("click", showNavbar);

links.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("header__navbar--active");
        hamburgerButton.classList.remove("header__hamburger-button--active");
    });
});

//<<<dark mode>>

const toggleSwitch = document.querySelector(
    '.header__checkbox input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);