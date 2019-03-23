import mockHomes from "../mockData/homes";

class Homes {

    constructor() {
        this.homesContainer = document.getElementById("homes");
    }

    addHomes(homes) {
        homes.map((homeData) => this.homesContainer.appendChild(this.createHomeContainer(homeData)));
    }

    createHomeContainer(homeData) {
        const homeContainer = document.createElement("div");
        homeContainer.className = "home";

        const homeImageContainer = this.createHomeImageContainer(homeData.image);
        const homeSpecificationContainer = this.createHomeSpecification(homeData);

        homeContainer.appendChild(homeImageContainer);
        homeContainer.appendChild(homeSpecificationContainer);

        return homeContainer;
    }

    createHomeSpecification({name, square}) {
        const homeNameContainer = document.createElement("div");
        homeNameContainer.innerText = "Жилой дом: " + name;

        const homeSquareContainer = document.createElement("div");
        homeSquareContainer.innerText = "Площадь: " + `${square} м2`;

        const homeSpecificationContainer = document.createElement("div");
        homeSpecificationContainer.className = "home-specification";

        homeSpecificationContainer.appendChild(homeNameContainer);
        homeSpecificationContainer.appendChild(homeSquareContainer);

        return homeSpecificationContainer;
    }

    createHomeImageContainer(image) {
        const imageContainer = document.createElement("div");
        imageContainer.className = "home-image";

        return imageContainer;
    }
}

const home = new Homes();

home.addHomes(mockHomes);