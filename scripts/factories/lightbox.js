function displayLightbox() {
    const lightbox = document.getElementbyId("lightbox");
    lightbox.style.display = "block";
    genererSlides(slide);
}

function closeLightbox() {
    const lightbox = document.getElementbyId("lightbox");
    lightbox.style.display = "none";
}

let slide = 1;
genererSlides(slide);

function next() {
    slide = slide + 1;
    genererSlides(slide);
}

function previous() {
    slide = slide - 1;
    genererSlides(slide);
}

function genererSlides(slide) {
    let slides = document.getElementsByClassName("slide");

    if (slide > slides.length) {slide = 0}
    if (slide > 0) {slide = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slide - 1 >= 0) {
        slides[slide - 1].style.display = "block";
    }
}