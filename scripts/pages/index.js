async function getPhotographers() {
    const data = await getData();
    console.log(data);
    return { photographers: data.photographers }
}

async function getData () {
    const json = "../../data/photographers.json";
    const response = fetch(json);
    if (!response.ok) {
        console.log(response.status)
        console.log(response.statusText)
        throw new Error ("problème de récupération de la promesse")
    }
    
    const data = await response.json();
    return data;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = new photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

