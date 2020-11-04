import { Component, OnInit } from '@angular/core'; 
import BookService from '../services/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }
}
