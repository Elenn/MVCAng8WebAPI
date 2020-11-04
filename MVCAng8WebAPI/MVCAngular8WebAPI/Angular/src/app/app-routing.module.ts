import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component'; 
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component'; 
import { SpamEmailComponent } from './spam-email/spam-email.component'; 
import { TwitterNationalParkComponent } from './twitter-national-park/twitter-national-park.component'; 

const routes: Routes = [ 
  { path: 'books', component: BookComponent, data: { title: 'Book List' } },
  { path: 'details/:id', component: BookDetailsComponent, data: { title: 'Book Details' } },
  { path: 'edit/:id', component: EditBookComponent, data: { title: 'Edit Book' } },
  { path: 'createbook', component: AddBookComponent, data: { title: 'Add Book' } }, 
  { path: 'spams', component: SpamEmailComponent, data: { title: 'Spam List' } }, 
  { path: 'twitpark', component: TwitterNationalParkComponent, data: { title: 'Spam List' } }, 
  { path: '', redirectTo: '/books', pathMatch: 'full', data: { title: 'Book List' } }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
