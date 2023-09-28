function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //creating elements from the dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const video = document.createElement('video');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const pTitreLike = document.createElement('p');
        const likeButton = document.createElement('i');
        const lienLightbox = document.createElement('div');
        const container = document.querySelector('.lightbox_container');
        const slide = document.createElement('div');
        const imgLightbox = document.createElement('img');
        const videoLightbox = document.createElement('video');
        const titreLightbox = document.createElement('p');

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        image.setAttribute("src", picture);
        video.setAttribute("src", mediaVideo);
        video.setAttribute("controls", true);
        pTitreLike.setAttribute("class", "titreLike");
        likeButton.setAttribute("class", "fa-solid fa-heart");
        lienLightbox.setAttribute("class", "lienLightbox");
        lienLightbox.setAttribute("onclick", "displayLightbox()");
        imgLightbox.setAttribute("src", picture);
        //videoLightbox.setAttribtue("src", mediaVideo);
        //videoLightbox.setAttribute("controls", true);
        titreLightbox.setAttribute("class", "titreLightbox");
        slide.setAttribute("class", "slide");

        //text to show with collected data
        h3.innerText = title;
        titreLightbox.innerText = title;

        //append element into chosen section
        
        if (data.image) { //display medias in photographer section
            section.appendChild(image);
        } else {
            section.appendChild(video);
        }

        if (data.image) {//display medias in lightbox
            slide.appendChild(imgLightbox);
        } else {
            slide.appendChild(videoLightbox);
        }
        
        article.appendChild(section);
        section.appendChild(pTitreLike);
        pTitreLike.appendChild(h3);
        pTitreLike.appendChild(likeButton);
        section.appendChild(lienLightbox);
        container.appendChild(slide);
        slide.appendChild(titreLightbox);

        return (article);
    }

    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}