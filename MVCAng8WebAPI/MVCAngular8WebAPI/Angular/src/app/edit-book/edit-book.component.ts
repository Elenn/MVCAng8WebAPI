import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import BookService from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditBookComponent implements OnInit {
  book: any = {};
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  } 

  getBookDetail(id): void { 
    this.bookService.getBook(id)
      .subscribe(data => this.book = data);
  }  

  updateBook(id): void {
    this.bookService.updateBook(this.book)
      .subscribe(data => {
        let id = data['Id'];
        this.router.navigate(['/details', id]);
      }, (err) => {
        console.log(err);
      }
      );
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
