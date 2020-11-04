import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-twitter-national-park',
  templateUrl: './twitter-national-park.component.html',
  styleUrls: ['./twitter-national-park.component.css']
})
export class TwitterNationalParkComponent implements OnInit {
  embedLink = ''; 

  constructor(private renderer2: Renderer2, private el: ElementRef) {
    this.embedLink = "https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"
  }

  ngOnInit() {
  }

  ngAfterViewInit() { 
    let scriptEl = document.createElement('script');
    scriptEl.src = "https://platform.twitter.com/widgets.js"

    this.renderer2.appendChild(this.el.nativeElement, scriptEl); 
  } 
}
