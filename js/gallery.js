/************** MODEL *****************/
const galleryImages = {
   images: [
      {
         title: "bilde1",
         caption: "Bilde1",
         img: "assets/bilde1.jpg",
      },
      {
         title: "bilde2",
         caption: "Bilde2",
         img: "assets/bilde2.jpg",
      },
      {
         title: "bilde3",
         caption: "Bilde3",
         img: "assets/bilde3.jpg",
      },
      {
         title: "bilde4",
         caption: "Bilde4",
         img: "assets/bilde4.jpg",
      },
      {
         title: "bilde5",
         caption: "Bilde5",
         img: "assets/bilde5.jpg",
      },
      {
         title: "bilde6",
         caption: "Bilde6",
         img: "assets/bilde6.jpg",
      },
      {
         title: "bilde7",
         caption: "Bilde7",
         img: "assets/bilde7.jpg",
      },
      {
         title: "bilde8",
         caption: "Bilde8",
         img: "assets/bilde8.jpg",
      },
      {
         title: "bilde9",
         caption: "Bilde9",
         img: "assets/bilde9.jpg",
      },
      {
         title: "bilde10",
         caption: "Bilde10",
         img: "assets/bilde10.jpg",
      },
      {
         title: "bilde12",
         caption: "Bilde12",
         img: "assets/bilde12.jpg",
      },
      {
         title: "bilde13",
         caption: "Bilde13",
         img: "assets/bilde13.jpg",
      },
      {
         title: "bilde14",
         caption: "Bilde14",
         img: "assets/bilde14.jpg",
      },
      {
         title: "bilde15",
         caption: "Bilde15",
         img: "assets/bilde15.jpg",
      },
      {
         title: "bilde16",
         caption: "Bilde16",
         img: "assets/bilde16.jpg",
      },
      {
         title: "bilde18",
         caption: "Bilde18",
         img: "assets/bilde18.jpg",
      },
   ],
};

/********* View *************/
function renderImages() {
   let images = document.querySelector(".work__galleryshow");

   images.innerHTML = "";

   galleryImages.images.forEach((image, index) => {
      let figureElement = document.createElement("figure");
      let figcaptionElement = document.createElement("figcaption");
      let imgElement = document.createElement("img");

      imgElement.src = image.img;
      imgElement.alt = image.caption;

      figcaptionElement.innerText = image.caption;

      figureElement.className = "work__figure";
      figcaptionElement.className = "work__caption";
      imgElement.className = "work__image";

      figureElement.appendChild(imgElement);
      figureElement.appendChild(figcaptionElement);

      images.appendChild(figureElement);
   });
}

renderImages();