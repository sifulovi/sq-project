import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
