let totalLikes = 0;
// let newLike = 0;

function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //creating elements from the dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const media = document.createElement('button');
        const h3 = document.createElement('h3');
        const pTitreLike = document.createElement('div');
        const pLikes = document.createElement('h4');
        const likeButton = document.createElement('button');
        const container = document.querySelector('.lightbox_container');
        const titreLightbox = document.createElement('h4');
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
            likeButton.setAttribute("aria-label", "bouton like");
        } else {
            likeButton.setAttribute("class", "fa-regular fa-heart");                
            likeButton.setAttribute("aria-label", "bouton liké");
        }
        pLikes.innerText = nbLikes + " ";
        sLikes.innerText = totalLikes + " ";

        likeButton.addEventListener('click', function () {
            if (data.isLiked) {
                totalLikes--;
                nbLikes--;
                //keepLikes--;
                data.isLiked = false;
                likeButton.setAttribute("class", "fa-regular fa-heart");
            } else {
                totalLikes++;
                nbLikes++;
                //keepLikes++;
                data.isLiked = true;
                likeButton.setAttribute("class", "fa-solid fa-heart");
            }
            pLikes.innerText = nbLikes + " ";
            sLikes.innerText = totalLikes + " ";
            sLikes.appendChild(iLikes);

        });

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        section.setAttribute("role", "dialog");
        media.setAttribute("class", "visuelMedia")
        media.setAttribute("aria-label", "media");
        media.id = id;
        pTitreLike.setAttribute("class", "titreLike");
        pTitreLike.setAttribute("aria-label", "likes")
        h3.setAttribute("aria-label", title);
        pLikes.setAttribute("class", "picture-likes");
        pLikes.setAttribute("aria-label", "bouton like");
        iLikes.setAttribute("class", "fa-solid fa-heart");
        iLikes.setAttribute("aria-label", "total de likes");

        
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
            image.setAttribute("alt", title);
            imgLightbox.setAttribute("src", picture);
            imgLightbox.setAttribute("alt", title);            
            imgLightbox.setAttribute("aria-label", "Version agrandie de la photo");
            media.appendChild(image);
            slide.appendChild(imgLightbox);
        } else {
            const video = document.createElement('video');
            const videoLightbox = document.createElement('video');
            video.setAttribute("src", mediaVideo);
            video.setAttribute("alt", title);
            video.setAttribute("controls", true);
            videoLightbox.setAttribute("src", mediaVideo);
            videoLightbox.setAttribute("type", "video/mp4");
            videoLightbox.setAttribute("controls", true);
            videoLightbox.setAttribute("alt", title);
            videoLightbox.setAttribute("aria-label", "Version agrandie de la vidéo");
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