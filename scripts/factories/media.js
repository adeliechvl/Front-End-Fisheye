function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //creating elements from the dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const h3 = document.createElement('h3');
        const pTitreLike = document.createElement('p');
        const likeButton = document.createElement('i');
        const container = document.querySelector('.lightbox_container');
        const titreLightbox = document.createElement('p');
        const slide = document.createElement('div');

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        pTitreLike.setAttribute("class", "titreLike");
        likeButton.setAttribute("class", "fa-solid fa-heart");

        //event to display lightbox on click
        article.addEventListener("click",(e) =>{
            displayLightbox();
        });

        titreLightbox.setAttribute("class", "titreLightbox");
        slide.setAttribute("class", "slide");

        //text to show with collected data
        h3.innerText = title;
        titreLightbox.innerText = title;

        //instruction to display pictures and videos
        if (data.image) {
            const image = document.createElement('img');
            const imgLightbox = document.createElement('img');
            image.setAttribute("src", picture)
            imgLightbox.setAttribute("src", picture);
            section.appendChild(image);
            slide.appendChild(imgLightbox);
        } else {
            const video = document.createElement('video');
            const videoLightbox = document.createElement('video');
            video.setAttribute("src", mediaVideo);
            video.setAttribute("controls", true);
            videoLightbox.setAttribute("src", mediaVideo);
            videoLightbox.setAttribute("controls", true);
            section.appendChild(video);
            slide.appendChild(videoLightbox);
        }

        //append element into chosen section
        article.appendChild(section);
        section.appendChild(pTitreLike);
        pTitreLike.appendChild(h3);
        pTitreLike.appendChild(likeButton);
        container.appendChild(slide);
        slide.appendChild(titreLightbox);

        return (article);
    }

    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}