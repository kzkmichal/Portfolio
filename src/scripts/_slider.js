// // <<<<<SLidery>>>>>>
// // const sliderContainer = document.querySelector(".project__container");
// const slideItems = document.querySelectorAll(".project__item");
// const slide = document.querySelector(".project__slider");
// let counter = 0;
// const rightArrow = document.querySelector(".project__arrow--right");
// const leftArrow = document.querySelector(".project__arrow--left");
// const active = document.querySelector(".slider-active.project__nav");

// // const magnifiers = document.querySelectorAll(".project__magnifier");

// class Slider {
//     constructor() {
//         this.magnifier = document
//             .querySelector(".project__magnifier")
//             .addEventListener("click", this.show.bind(this));

//         this.sliderContainer = document.querySelector(".project__container");
//     }
//     show() {
//         this.sliderContainer.classList.add("slider-active");
//     }
// }

// const slides = new Slider();

// // magnifier.addEventListener("click", () => {
// //     sliderContainer.classList.add("slider-active");
// // });

// document.addEventListener("keydown", e => {
//     if (e.keyCode == 27) sliderContainer.classList.remove("slider-active");
// });

// // const nextSlide = () => {
// //     const selected = document.querySelector(".selected");
// //     slideItems[counter].classList.add("move-left");

// //     selected.classList.remove("selected");

// //     if (selected.nextElementSibling)
// //         selected.nextElementSibling.classList.add("selected");
// // };

// // const previouSlide = () => {
// //     const selected = document.querySelector(".selected");
// //     slideItems[counter - 1].classList.remove("move-left");

// //     selected.classList.remove("selected");
// //     if (selected.previousElementSibling)
// //         selected.previousElementSibling.classList.add("selected");
// // };

// // rightArrow.addEventListener("click", () => {
// //     if (counter < slideItems.length - 1) {
// //         nextSlide();
// //         counter++;
// //     }
// // });

// // leftArrow.addEventListener("click", () => {
// //     if (counter > 0) {
// //         previouSlide();
// //         counter--;
// //     }
// // });

// const buttons= document.querySelectorAll('buttons')

// const slide= new Slider()
// class Slider{

// }
// buttons.forEach(button=> {
//     button.addEventListener('click', slide)
// })