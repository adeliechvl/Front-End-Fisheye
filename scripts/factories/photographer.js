// function template to create UserCardDom

function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        //creating elements from the dom
        const article = document.createElement('article');
        const link = document.createElement('a');
        const photographerName = document.createElement('h2');
        const img = document.createElement('img');
        const localisation = document.createElement("p");
        const pTagline = document.createElement("p");
        const pPrice = document.createElement("p");
        const url = `./photographer.html?id=${id}`;

        //inserting attributs for each elements
        img.setAttribute("src", picture)
        localisation.setAttribute("class", "localisation");
        pTagline.setAttribute("class", "tagline");
        pPrice.setAttribute("class", "price");
        link.setAttribute("href", url);

        //text to show with collected data
        photographerName.innerText = name;
        localisation.innerText = `${city}, ${country}`;
        pTagline.innerText = tagline;
        pPrice.innerText = `${price}€/jour`;

        //append element into chosen section
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(photographerName);
        link.appendChild(localisation);
        link.appendChild(pTagline);
        link.appendChild(pPrice);

        return (article);
    }

    return { name, picture, city, country, tagline, price, getUserCardDOM }
}
