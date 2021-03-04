import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorModel} from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  API_URL = 'https://api.quotable.io/authors';

  constructor(private http: HttpClient) {
  }

  getAuthorList(): any {
    return this.http.get(`${this.API_URL}?limit=10&skip=20`);
  }

  addFavoriteAuthor(payload: AuthorModel): void {
    payload.isFavorite = true;
    const storedNames = JSON.parse(localStorage.getItem('favoriteAuthor'));
    storedNames.push(payload);
    localStorage.setItem('favoriteAuthor', JSON.stringify(storedNames));
  }

  deleteFavoriteAuthor(id): void {
    const storedNames = JSON.parse(localStorage.getItem('favoriteAuthor'));
    const newFavData = storedNames.filter(asd => asd._id !== id);
    localStorage.setItem('favoriteAuthor', JSON.stringify(newFavData));
  }

  initFavoriteAuthor(): void {
    const storedNames = JSON.parse(localStorage.getItem('favoriteAuthor'));
    if (storedNames === null) {
      localStorage.setItem('favoriteAuthor', JSON.stringify([]));
    }
    console.log(`sdfsfsdf ${storedNames}`);
  }

  getFavoriteAuthList(): any {
    return JSON.parse(localStorage.getItem('favoriteAuthor'));
  }
}
