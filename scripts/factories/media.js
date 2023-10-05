let totalLikes = 0;

function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //creating elements from the dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const media = document.createElement('div');
        const h3 = document.createElement('h3');
        const pTitreLike = document.createElement('div');
        const pLikes = document.createElement('p');
        const likeButton = document.createElement('i');
        const container = document.querySelector('.lightbox_container');
        const titreLightbox = document.createElement('p');
        const slide = document.createElement('div');
        const encart = document.querySelector('.encart');
        const sLikes = document.querySelector('.likes');
        const iLikes = document.createElement('i');
        const price = document.querySelector('#price');


        //likes
        data.isLiked = false;
        let nbLikes = parseInt(likes);
        totalLikes += nbLikes;
        if (data.isLiked) {
            likeButton.setAttribute("class", "fa-solid fa-heart");
        } else {
            likeButton.setAttribute("class", "fa-regular fa-heart");
        }
        pLikes.innerText = nbLikes + " ";
        sLikes.innerText = totalLikes + " ";

        likeButton.addEventListener('click', function () {
            if (data.isLiked) {
                totalLikes--;
                nbLikes--;
                data.isLiked = false;
                likeButton.setAttribute("class", "fa-regular fa-heart");
            } else {
                totalLikes++;
                nbLikes++;
                data.isLiked = true;
                likeButton.setAttribute("class", "fa-solid fa-heart");
            }
            pLikes.innerText = nbLikes + " ";
            sLikes.innerText = totalLikes + " ";
            sLikes.appendChild(iLikes);

        });

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        media.setAttribute("class", "visuelMedia")
        media.id = id;
        pTitreLike.setAttribute("class", "titreLike");
        pLikes.setAttribute("class", "picture-likes");
        iLikes.setAttribute("class", "fa-solid fa-heart");

        
        //event to display lightbox on click
        media.addEventListener("click", (e) => {
            const currentId = e.currentTarget.id;
            const slides = Array.from(document.getElementsByClassName("slide"));
            const index = slides.findIndex(s => currentId === s.id);
            displayLightbox(index + 1);
        });

        titreLightbox.setAttribute("class", "titreLightbox");
        slide.setAttribute("class", "slide");
        slide.id = id;

        //text to show with collected data
        h3.innerText = title;
        titreLightbox.innerText = title;
        pLikes.innerHTML = likes;

        //instruction to display pictures and videos
        if (data.image) {
            const image = document.createElement('img');
            const imgLightbox = document.createElement('img');
            image.setAttribute("src", picture)
            imgLightbox.setAttribute("src", picture);
            media.appendChild(image);
            slide.appendChild(imgLightbox);
        } else {
            const video = document.createElement('video');
            const videoLightbox = document.createElement('video');
            video.setAttribute("src", mediaVideo);
            video.setAttribute("controls", true);
            videoLightbox.setAttribute("src", mediaVideo);
            videoLightbox.setAttribute("controls", true);
            media.appendChild(video);
            slide.appendChild(videoLightbox);
        }

        //append element into chosen section
        article.appendChild(section);
        section.appendChild(media);
        section.appendChild(pTitreLike);
        pTitreLike.appendChild(h3);
        pTitreLike.appendChild(pLikes);
        pTitreLike.appendChild(likeButton);
        container.appendChild(slide);
        slide.appendChild(titreLightbox);
        encart.appendChild(sLikes);
        sLikes.appendChild(iLikes);
        encart.appendChild(price);

        return (article);
    }

    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}