let ssButton = document.getElementById("ss-button");
let newsButton = document.getElementById("news-button");
let wordButton = document.getElementById("word-button");
let miniButton = document.getElementById("mini-button");

let ssSection = document.getElementById("ss-section");
let newsSection = document.getElementById("news-section");
let wordSection = document.getElementById("word-section");
let miniSection = document.getElementById("mini-section");

let strip1Carousel = document.getElementById("strip1-carousel");
let stripPCarousel = document.getElementById("strip-p-carousel");
let miniCarousel = document.getElementById("mini-carousel");

let currentPage = ssSection;

carousel(miniCarousel);
carousel(strip1Carousel);
carousel(stripPCarousel);


function changePage(currentPage) {
    let activeSections = document.querySelectorAll(".active-section");
    activeSections.forEach(activeSection => activeSection.classList.remove("active-section"));
    currentPage.classList.add("active-section");
}

ssButton.addEventListener("click", () => {
    changePage(currentPage=ssSection);
});
newsButton.addEventListener("click", () => {
    changePage(currentPage=newsSection);
});
wordButton.addEventListener("click", () => {
    changePage(currentPage=wordSection);
});
miniButton.addEventListener("click", () => {
    changePage(currentPage=miniSection);
});

function carousel(id) {
    let slides = id.querySelectorAll(".carousel-image");
    let dots = id.querySelectorAll(".dot");
    let backButton = id.querySelector("#back-button");
    let forwardButton = id.querySelector("#forward-button");
    let captions = id.querySelectorAll(".image-caption");
    let slideIndex = 1;
    showSlides();

    backButton.addEventListener("click", backSlide);
    forwardButton.addEventListener("click", forwardSlide);
    function backSlide() {
    slideIndex = slideIndex-1;
    if (slideIndex < 1) {
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.animation = "slideInLeft 1s";
    showSlides();
    } 
    function forwardSlide() {
    slideIndex = slideIndex + 1;
    if (slideIndex > slides.length) {
        slideIndex=1;
    }
    slides[slideIndex-1].style.animation = "slideInRight 1s";
    showSlides();
    }

    function showSlides() {
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    for (x=0; x<dots.length; x++) {
        dots[x].classList.remove("active-dot");
    }
    dots[slideIndex-1].classList.add("active-dot");
    for (c=0; c<captions.length; c++) {
        captions[c].style.display = "none";
    }
    captions[slideIndex-1].style.display = "block";
    } //must be recalled each time slideIndex is changed in order to reflect change

    dots.forEach((element, index) => {
    element.addEventListener("click", changeSlide);
    function changeSlide() {
        slideIndex=index+1;
        slides[slideIndex-1].style.animation = "literallyNothing 0s";
        showSlides();
    }
    }); 
}