import axios from 'axios';
const KEY = '29652789-9575d4159aae8e630a1d59f50';
import Notiflix from 'notiflix';

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPhotos() {
    try {
      const api = axios.create({
        baseURL: 'https://pixabay.com/api/',
      });
      const resposne = await api.get(
        `?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
      );
      const newObj = await resposne.data;
      this.page += 1;
      return newObj;
    } catch (error) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      throw error;
    }
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
}
