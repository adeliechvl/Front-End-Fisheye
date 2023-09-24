function pictureTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/images/${photographerId}/${image}`;
    const mediaVideo = `./assets/images/${photographerId}/${video}`;

    function getPicturesDom() {

        //creating elements from the dom
        const article = document.createElement('article');
        const section = document.createElement('section');
        const video = document.createElement('video')
        const source = document.createElement('source');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');

        //inserting attributes for each elements
        article.setAttribute("class", "media");
        source.setAttribute("src", mediaVideo);
        source.setAttribute("type", "video/mp4");
        video.setAttribute("controls", true);
        image.setAttribute("src", picture);

        //text to show with collected data
        h3.innerText = title;

        //append element into chosen section
        article.appendChild(section);
        section.appendChild(image);
        section.appendChild(h3);

        return (article);
    }
    
    return { id, photographerId, title, image, video, likes, date, price, getPicturesDom }

}