import image1  from "../image/image1.jpg";
import image2  from "../image/image2.jpg";
import image3  from "../image/image3.jpg";
import image4  from "../image/image4.jpg";
import image5  from "../image/image5.jpg";
import image6  from "../image/image6.jpg";

const images = [image1, image2, image3, image3, image4, image5, image6];

class Gallery {
    constructor() {
        this.galleryContainer = document.getElementById("gallery");
        this.backArrow = document.getElementById("arrow-back");
        this.nextArrow = document.getElementById("arrow-next");
        this.currentImage = 0;
    }

    createGallery(images) {
        const image = document.createElement("img");

        image.src = images[1];

        image.className = "current-image";

        this.galleryContainer.appendChild(image);

        this.backArrow.onclick = () => {
            this.currentImage = this.currentImage - 1 === -1 ? images.length -1 : this.currentImage - 1;
            image.src = images[this.currentImage];
        }

        this.nextArrow.onclick = () => {
            this.currentImage = this.currentImage + 1 === images.length ? 0 : this.currentImage + 1;
            image.src = images[this.currentImage];
        }

    }

}

const gallery = new Gallery();

gallery.createGallery(images);

