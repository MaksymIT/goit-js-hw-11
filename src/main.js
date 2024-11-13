// import functions
import { createGalerryCard } from "./js/render-functios";
import { fetchPhotos } from "./js/pixabay";

// find HTML elements
const searchForm = document.querySelector('.search-container');
const galerryEl = document.querySelector(".galerry-js");
const loader = document.querySelector(".loader");

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".galerry-js a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Функція для приховування індикатора завантаження
function hideLoader() {
    loader.classList.add("hidden");
}

// Функція для показу індикатора завантаження
function showLoader() {
    loader.classList.remove("hidden");
}

// Основна функція обробки форми
const clickForm = async (event) => {
  event.preventDefault();

  const userInput = searchForm.elements.user_query.value.trim();

  // Перевірка введення
  if (!userInput) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query.",
    });
    return;
  }

  // Очищення галереї та показ індикатора завантаження
  galerryEl.innerHTML = "";
  showLoader();

  try {
    // Запит на бекенд
    const data = await fetchPhotos(userInput);

    // Перевірка результатів пошуку
    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
      searchForm.reset();
      hideLoader();
      return;
    }

    // Створення розмітки галереї
    const galerryCardTemplate = data.hits.map(img => createGalerryCard(img)).join('');
    galerryEl.innerHTML = galerryCardTemplate;

    // Оновлення SimpleLightbox
    lightbox.refresh();

    // Очищення форми після успішного запиту
    searchForm.reset();
  } catch (error) {
    // Обробка помилки
    iziToast.error({
      title: "Error",
      message: "An error occurred while fetching images. Please try again later.",
    });
    console.error(error);
  } finally {
    // Приховуємо індикатор завантаження
    hideLoader();
  }
};

// Додаємо обробник події на форму
searchForm.addEventListener('submit', clickForm);
