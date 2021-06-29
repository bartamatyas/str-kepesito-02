import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: Observable<Book[]> = new Observable<Book[]>();


  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getBookList(): void {
    this.bookList = this.httpService.getBookList();
  }

  readBook(bookObj){}

}
