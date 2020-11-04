import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import BookService from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {
  book: any = {};
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  } 

  getBookDetail(id): void {
    this.bookService.getBook(id)
      .subscribe(data => this.book = data);
  }  

  deleteBook(id): void {
    this.bookService.deleteBook(id)
      .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
