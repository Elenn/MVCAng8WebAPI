import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
import BookService from '../services/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookComponent implements OnInit {
  book: any = {};
  books: Book[];
 
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  } 

  createBook(): void { 
    this.bookService.addBook(this.book)
      .subscribe(book => {
        //this.books.push(book); 
        let id = book['Id'];
        this.router.navigate(['/details', id]); 
      },(err) => {
        console.log(err);
      }
      );
  }
}
