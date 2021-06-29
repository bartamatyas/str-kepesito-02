import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild('mForm', { static: true }) bookForm: FormGroup;
  movie: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

  saveBook(book: Book): any {
    console.log(book)
  }

}
