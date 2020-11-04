import { Component, OnInit } from '@angular/core';
import SpamService from '../services/spam.service';
import { Spam } from '../shared/spam';

@Component({
  selector: 'app-spam-email',
  templateUrl: './spam-email.component.html',
  styleUrls: ['./spam-email.component.css']
})
export class SpamEmailComponent implements OnInit {
  spams: Array<Spam>;

  constructor(private spamService: SpamService) {
  }

  ngOnInit() {
    this.spamService.getAll().subscribe(data => {
      this.spams = data;
    });
  }
}
