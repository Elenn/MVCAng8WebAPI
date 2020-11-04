import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';  
 
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { SpamEmailComponent } from './spam-email/spam-email.component';
import { TwitterNationalParkComponent } from './twitter-national-park/twitter-national-park.component';  

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    HeaderComponent,
    FooterComponent, 
    SpamEmailComponent, TwitterNationalParkComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
