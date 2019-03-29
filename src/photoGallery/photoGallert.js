import image1  from "../image/image1.jpg";
import image2  from "../image/image2.jpg";
import image3  from "../image/image3.jpg";
import image4  from "../image/image4.jpg";
import image5  from "../image/image5.jpg";
import image6  from "../image/image6.jpg";

const images = [image1, image2, image3, image3, image4, image5, image6];

class Gallery {
    constructor() {
        this.imageContainer = document.getElementById("image-from-gallery");
        this.galleryContainer = document.getElementById("gallery");

        this.backArrow = document.getElementById("arrow-back");
        this.nextArrow = document.getElementById("arrow-next");

        this.currentIndexImage = 0;
        this.containerImages = null;

        this.currentImageContainer = document.createElement("img");
        this.currentImageContainer.draggable = false;
        this.currentImageContainer.className = "current-image";
        this.imageContainer.appendChild(this.currentImageContainer);

        this.activeImageInGallety = null;
    }

    createGallery(images) {

        this.containerImages = images.map((image, index) => {
          const imageContainer = document.createElement("img");
          imageContainer.draggable = false;
          imageContainer.src = image;
          imageContainer.className = "iamge-gallery";
          imageContainer.onclick = () => {
            this.makeActive(index, image);
          }
          this.galleryContainer.appendChild(imageContainer);

          return imageContainer;
        });

        this.makeActive(0, images[0]);
        

        this.backArrow.onclick = () => {
            this.checkBackImage();
            this.makeActive(this.currentIndexImage, images[this.currentIndexImage]);
        }

        this.nextArrow.onclick = () => {
            this.checkNextImage();
            this.makeActive(this.currentIndexImage, images[this.currentIndexImage]);
        }

        // this.currentImageContainer.onmousedown = (e) => {
        //     const beginX = e.clientX
        //     this.currentImageContainer.onmousemove = (e) => {
        //         const difference = beginX - e.clientX
        //         if (difference > 1000 || difference < 1000) {
        //             if (difference > 0) {
        //                 this.checkBackImage();
        //                 this.makeActive(this.currentIndexImage, images[this.currentIndexImage]);
        //             }
        //             else {
        //                 this.checkNextImage();     
        //                 this.makeActive(this.currentIndexImage, images[this.currentIndexImage]);              
        //             }
        //             return false
        //         }
        //     }
        // }

        // this.currentImageContainer.onmouseup = () => {
        //     this.currentImageContainer.onmousemove = null;
        // }
    }

    checkNextImage() {
        this.currentIndexImage = this.currentIndexImage + 1 === images.length ? 0 : this.currentIndexImage + 1;
    }

    checkBackImage() {
        this.currentIndexImage = this.currentIndexImage - 1 === -1 ? images.length -1 : this.currentIndexImage - 1;
    }

    makeActive(index, image) {
        if (this.activeImageInGallety) {
            this.activeImageInGallety.classList.remove("current-image-in-gallery");
        }

        const nextActiveImage = this.containerImages[index];

        this.currentImageContainer.src = image;
        this.activeImageInGallety = nextActiveImage;
        this.activeImageInGallety.classList.add("current-image-in-gallery");

    }

}

const gallery = new Gallery();

gallery.createGallery(images);

