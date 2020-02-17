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

//<<<<<<<<<sliders>>>>>>>>>>>>>>

const content = document.querySelectorAll(".project__content");
content.forEach(function slider(section) {
    const magnifier = section.querySelector(".project__magnifier");
    const sliderContainer = section.querySelector(".project__container");
    const slideItems = section.querySelectorAll(".project__item");
    const rightArrow = section.querySelector(".project__arrow--right");
    const leftArrow = section.querySelector(".project__arrow--left");
    const close = section
        .querySelector(".project__close")
        .addEventListener("click", () => {
            sliderContainer.classList.remove("slider-active");
        });

    const indicator = section.querySelector(".project__indicator");
    const dots = section.querySelectorAll(".project__dot");

    magnifier.addEventListener("click", () => {
        sliderContainer.classList.add("slider-active");
    });
    const nextSlide = () => {
        const selected = section.querySelector(".selected");
        const dot = section.querySelector(".project__dot--active");
        selected.classList.remove("selected");
        dot.classList.remove("project__dot--active");

        if (selected.nextElementSibling) {
            selected.nextElementSibling.classList.add("selected");
            dot.nextElementSibling.classList.add("project__dot--active");
        } else {
            slideItems[0].classList.add("selected");
            dots[0].classList.add("project__dot--active");
        }
    };
    const previouSlide = () => {
        const selected = section.querySelector(".selected");
        const dot = section.querySelector(".project__dot--active");
        selected.classList.remove("selected");
        dot.classList.remove("project__dot--active");

        if (selected.previousElementSibling) {
            selected.previousElementSibling.classList.add("selected");
            dot.previousElementSibling.classList.add("project__dot--active");
        } else {
            slideItems[slideItems.length - 1].classList.add("selected");
            dots[dots.length - 1].classList.add("project__dot--active");
        }
    };

    rightArrow.addEventListener("click", () => {
        nextSlide();
    });
    leftArrow.addEventListener("click", () => {
        previouSlide();
    });
});