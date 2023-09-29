//function to display lightbox when media gets clicked on
function displayLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
    genererSlides(slideIndex);
}

//function to close lightbox when cross gets clicked on
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

let slideIndex = 1;
genererSlides(slideIndex);

//function to go to previous slide
function previous() {
    slideIndex = slideIndex - 1;
    genererSlides(slideIndex);
}

//function to go to the next slide
function next() {
    slideIndex = slideIndex + 1;
    genererSlides(slideIndex);
}

//function to get the slides to be displayed and logic
function genererSlides(slideIndex) {

    let slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex - 1 >= 0) {
        slides[slideIndex - 1].style.display = "block";
    }
}