import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute("data-source", item.original);

  // Додаємо обробник події click на кожен елемент зображення

  galleryLink.addEventListener("click", (e) => {
    e.preventDefault(); // Забороняємо стандартну дію (перенаправлення)
    const lightbox = basicLightbox.create(
      `<img src="${item.original}" alt=item.description>`
    );
    lightbox.show(); // Відкриваємо модальне вікно з зображенням
  });

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function createGallery(items) {
  const galleryFragment = document.createDocumentFragment();
  items.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    galleryFragment.appendChild(galleryItem);
  });
  galleryList.appendChild(galleryFragment);
}

createGallery(galleryItems);
