// function template to create UserCardDom

function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //function to display user card in index
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

        //inserting attributes for each elements
        img.setAttribute("src", picture)
        img.setAttribute("alt", name);
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

    //function to display photographer in header of its own photographer page
    function getPhotographerDom() {

        //creating elements from the dom
        const header = document.querySelector('.photograph-header');
        const divPresentation = document.createElement('div');
        const h1 = document.createElement('h1');
        const pLocalisation = document.createElement('h2');
        const pTagline = document.createElement('p');
        const divImg = document.createElement('div');
        const img = document.createElement('img');
        const modale = document.querySelector('.modal');
        const modaleHeader = document.querySelector('.modalHeader');
        const h2 = document.querySelector('.contactTitre');
        const boutonModale = document.querySelector('.fermer');
        const form = document.querySelector('#contactForm');

        
        //inserting attributes for each elements
        divPresentation.setAttribute("class", "presentation");
        h1.setAttribute("class", name);
        pLocalisation.setAttribute("class", "localisation" )
        pTagline.setAttribute("class", "tagline");
        divImg.setAttribute("class", "portrait");
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        
        //text to show with collected data
        h1.innerText = name;
        pLocalisation.innerText = `${city}, ${country}`;
        pTagline.innerText = tagline;
        h2.innerText = "Contactez-moi " + name;
        
        //append element into chosen section
        header.appendChild(divPresentation);
        divPresentation.appendChild(h1);
        divPresentation.appendChild(pLocalisation);
        divPresentation.appendChild(pTagline);
        divImg.appendChild(img);
        header.appendChild(divImg);
        modale.appendChild(modaleHeader);
        modaleHeader.appendChild(h2);
        modaleHeader.appendChild(boutonModale);
        modale.appendChild(form);
        
        return (header);
    }

    return { name, picture, city, country, tagline, price, id, getUserCardDOM, getPhotographerDom }
}
