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

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        image.setAttribute("src", picture);
        video.setAttribute("src", mediaVideo);
        video.setAttribute("controls", true);
        pTitreLike.setAttribute("class", "titreLike");
        likeButton.setAttribute("class", "fa-solid fa-heart");

        //text to show with collected data
        h3.innerText = title;

        //append element into chosen section
        if (data.image) {
            section.appendChild(image);
        } else {
            section.appendChild(video);
        }

        article.appendChild(section);
        section.appendChild(pTitreLike);
        pTitreLike.appendChild(h3);
        pTitreLike.appendChild(likeButton);

        return (article);
    }

    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}