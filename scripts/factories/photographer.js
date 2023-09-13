function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const photographerName = document.createElement('h2');
        photographerName.innerText = name;

        const localisation = document.createElement("p");
        localisation.innerText = `${city}, ${country}`;

        const pTagline = document.createElement("p");
        pTagline.innerText = tagline;

        const pPrice = document.createElement("p");
        pPrice.innerText = `${price}€/jour`;

        article.appendChild(img);
        article.appendChild(photographerName);
        article.appendChild(localisation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}