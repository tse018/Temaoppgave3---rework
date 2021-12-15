/************** MODEL *****************/
const galleryImages = {
   images: [
      {
         title: "bilde1",
         caption: "The Eye",
         img: "assets/bilde1.jpg",
      },
      {
         title: "bilde2",
         caption: "Cosmic",
         img: "assets/bilde2.jpg",
      },
      {
         title: "bilde3",
         caption: "Happy Face",
         img: "assets/bilde3.jpg",
      },
      {
         title: "bilde4",
         caption: "Achivement",
         img: "assets/bilde4.jpg",
      },
      {
         title: "bilde5",
         caption: "Sad Lady",
         img: "assets/bilde5.jpg",
      },
      {
         title: "bilde6",
         caption: "Face Mask",
         img: "assets/bilde6.jpg",
      },
      {
         title: "bilde7",
         caption: "Happy where you are?",
         img: "assets/bilde7.jpg",
      },
      {
         title: "bilde8",
         caption: "Losing Grip",
         img: "assets/bilde8.jpg",
      },
      {
         title: "bilde9",
         caption: "Together",
         img: "assets/bilde9.jpg",
      },
      {
         title: "bilde10",
         caption: "Netamorphosis",
         img: "assets/bilde10.jpg",
      },
      {
         title: "bilde12",
         caption: "Growing Flower",
         img: "assets/bilde12.jpg",
      },
      {
         title: "bilde13",
         caption: "More Flowers",
         img: "assets/bilde13.jpg",
      },
      {
         title: "bilde14",
         caption: "Love Birds",
         img: "assets/bilde14.jpg",
      },
      {
         title: "bilde15",
         caption: "Wallpaper",
         img: "assets/bilde15.jpg",
      },
      {
         title: "bilde16",
         caption: "Wall painting",
         img: "assets/bilde16.jpg",
      },
      {
         title: "bilde18",
         caption: "Doors full of dreams",
         img: "assets/bilde18.jpg",
      },
   ],
};

/********* View *************/
function renderImages() {
   let images = document.querySelector(".work__galleryshow");

   images.innerHTML = "";

   galleryImages.images.forEach((image) => {
      let figureElement = document.createElement("figure");
      let figcaptionElement = document.createElement("figcaption");
      let imgElement = document.createElement("img");

      imgElement.src = image.img;
      imgElement.alt = image.caption;

      imgElement.setAttribute("alt", "bilde av " + imgElement.alt)

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