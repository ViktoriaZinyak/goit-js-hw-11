import PixabayApi from './js/pixabay-api';
import Notiflix from 'notiflix';

const form = document.querySelector('.search-form');
const buttonLoadMore = document.querySelector('.load-more');
const photosWrap = document.querySelector('.gallery');
const pixabayApi = new PixabayApi();

buttonLoadMore.classList.add('is-hidden');
form.addEventListener('submit', onSearch);
buttonLoadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  clearPhotosWrap();
  buttonLoadMore.classList.add('is-hidden');
  pixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();
  pixabayApi.resetPage();
  try {
    const data = await pixabayApi.fetchPhotos();
    if (data.totalHits > 0) {
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      buttonLoadMore.classList.remove('is-hidden');
    } else {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    appendPhotosMarkup(data.hits);
  } catch (error) {
    console.error(error);
  }
}

async function onLoadMore() {
  const data = await pixabayApi.fetchPhotos();
  if (data.totalHits === 0) {
    buttonLoadMore.classList.add('is-hidden');
  }
  appendPhotosMarkup(data.hits);
}

function photoTemplate(photos) {
  if (photos.length < 40 && photos.length != 0) {
    buttonLoadMore.classList.add('is-hidden');
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
  return photos
    .map(
      el => `<div class="photo-card">
      <a href=${el.largeImageURL}'>
  <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${el.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${el.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${el.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${el.downloads}</b>
    </p>
  </div>
</div>`
    )
    .join('');
}

function appendPhotosMarkup(photos) {
  photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
}

function clearPhotosWrap() {
  photosWrap.innerHTML = '';
}
