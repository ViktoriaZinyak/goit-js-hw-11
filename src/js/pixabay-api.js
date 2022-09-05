import axios from 'axios';
const KEY = '29652789-9575d4159aae8e630a1d59f50';
import Notiflix from 'notiflix';

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    const api = axios.create({
      baseURL: 'https://pixabay.com/api/',
    });
    return api
      .get(
        `?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
      )
      .then(data => {
        this.page += 1;
        return data.data;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  notification() {
    return this.fetchPhotos().then(data => {
      if (data.totalHits > 0) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      } else {
        Notiflix.Notify.failure('Oops, there is no photo with that name');
      }
      return data.totalHits;
    });
  }
}
