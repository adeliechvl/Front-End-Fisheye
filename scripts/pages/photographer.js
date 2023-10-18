async function getPhotographer() {
    const parameters = new URLSearchParams(window.location.search)
    const idString = parameters.get('id')
    const photographerData = await fetch('./data/photographers.json')
        .then((data) => data.json());

    const photographer = photographerData.photographers.find(
        (photographer) => photographer.id == idString
    );
    return photographer;
}

async function getMedias() {
    const parameters = new URLSearchParams(window.location.search)
    const idString = parameters.get('id')
    const photographerData = await fetch('./data/photographers.json')
        .then((data) => data.json());

    let media = photographerData.media.filter(
        (mediaObj) => mediaObj.photographerId == idString
    );
    return media;
}

async function displayDataPhotographer(photographer) {
    const photographerModel = new photographerTemplate(photographer);
    photographerModel.getPhotographerDom();
    const encart = document.querySelector("#price");
    encart.innerText = photographerModel.price + `€/Jour`;
}

function tri(photographerMedias) {
    const boutonTri = document.querySelector("#tri");
    boutonTri.addEventListener("change", function () {
        totalLikes = 0;
        //totalLikes = keepLikes; (pour stocker les likes en changeant de paramètre de tri)
        const container = document.querySelector('.afficherMedias');
        container.innerText = "";
        switch (boutonTri.value) {
            case 'popularity':
                media = photographerMedias.sort((a, b) => b.likes - a.likes);
                displayMedia(media);
                break;

            case 'date':
                media = photographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
                displayMedia(media);
                break;

            case 'title':
                media = photographerMedias.sort((a, b) => a.title.localeCompare(b.title));
                displayMedia(media);
                break;

            default:
                displayMedia(photographerMedias);
                break;
        }
    });
}

async function displayMedia(media) {
    const picturesSection = document.querySelector(".afficherMedias");
    media.forEach((picture) => {
        const pictureModel = pictureTemplate(picture);
        const pictureCardDOM = pictureModel.getPicturesDom();
        picturesSection.appendChild(pictureCardDOM);
    });
}

async function init() {
    const photographer = await getPhotographer();
    await displayDataPhotographer(photographer);

    const photographerMedias = await getMedias();
    await displayMedia(photographerMedias);
    tri(photographerMedias);
}

init();