import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient,) { }

  getBookList():Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_URL);
  }

  readABook(id, book):any{}
}
