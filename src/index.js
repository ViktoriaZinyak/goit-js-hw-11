// import PixabayApi from './js/pixabay-api';

// const form = document.querySelector('.search-form');
// const buttonLoadMore = document.querySelector('.load-more');
// const photosWrap = document.querySelector('.gallery');

// const pixabayApi = new PixabayApi();
// buttonLoadMore.classList.add('is-hidden');
// form.addEventListener('submit', onSearch);
// buttonLoadMore.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   e.preventDefault();
//   pixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();
//   pixabayApi.resetPage();
//   pixabayApi
//     .fetchPhotos()
//     .then(data => data.hits)
//     .then(photos => {
//       clearPhotosWrap();
//       pixabayApi.notification().then(data => {
//         if (data > 0) {
//           buttonLoadMore.classList.remove('is-hidden');
//         }
//       });
//       photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
//     });
//   buttonLoadMore.classList.add('is-hidden');
// }

// function onLoadMore() {
//   pixabayApi
//     .fetchPhotos()
//     .then(data => data.hits)
//     .then(appendPhotosMarkup);
// }

// function photoTemplate(photos) {
//   return photos
//     .map(
//       el => `<div class="photo-card">
//   <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes ${el.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${el.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${el.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${el.downloads}</b>
//     </p>
//   </div>
// </div>`
//     )
//     .join('');
// }

// function appendPhotosMarkup(photos) {
//   photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
// }

// function clearPhotosWrap() {
//   photosWrap.innerHTML = '';
// }

// import PixabayApi from './js/pixabay-api';

// const form = document.querySelector('.search-form');
// const buttonLoadMore = document.querySelector('.load-more');
// const photosWrap = document.querySelector('.gallery');

// const pixabayApi = new PixabayApi();
// buttonLoadMore.classList.add('is-hidden');
// form.addEventListener('submit', onSearch);
// buttonLoadMore.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   e.preventDefault();
//   pixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();
//   pixabayApi.resetPage();
//   pixabayApi.fetchPhotos().then(photos => {
//     clearPhotosWrap();
//     pixabayApi.notification();
//     photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
//     buttonLoadMore.classList.remove('is-hidden');
//   });
// }

// function onLoadMore() {
//   pixabayApi.fetchPhotos().then(appendPhotosMarkup);
// }

// function photoTemplate(photos) {
//   return photos
//     .map(
//       el => `<div class="photo-card">
//   <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes ${el.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${el.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${el.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${el.downloads}</b>
//     </p>
//   </div>
// </div>`
//     )
//     .join('');
// }

// function appendPhotosMarkup(photos) {
//   photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
// }

// function clearPhotosWrap() {
//   photosWrap.innerHTML = '';
// }

import PixabayApi from './js/pixabay-api';

const form = document.querySelector('.search-form');
const buttonLoadMore = document.querySelector('.load-more');
const photosWrap = document.querySelector('.gallery');

const pixabayApi = new PixabayApi();
// buttonLoadMore.classList.add('is-hidden');
form.addEventListener('submit', onSearch);
buttonLoadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  clearPhotosWrap();
  pixabayApi.query = e.currentTarget.elements.searchQuery.value.trim();
  pixabayApi.resetPage();
  pixabayApi
    .fetchPhotos()
    .then(data => data.hits)
    .then(appendPhotosMarkup);
  //  ;
  //   pixabayApi.fetchPhotos().then(photos => {
  //     clearPhotosWrap();
  //     pixabayApi.notification();
  //     photosWrap.insertAdjacentHTML('beforeend', photoTemplate(photos));
  //     buttonLoadMore.classList.remove('is-hidden');
  //   });
}

function onLoadMore() {
  pixabayApi
    .fetchPhotos()
    .then(data => data.hits)
    .then(appendPhotosMarkup);
  // .then(appendPhotosMarkup);
  //   pixabayApi.fetchPhotos().then(appendPhotosMarkup);
}

function photoTemplate(photos) {
  console.log(photos);
  return photos
    .map(
      el => `<div class="photo-card">
  <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
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
