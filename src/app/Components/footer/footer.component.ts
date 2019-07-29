import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public thankYouMessage: string = null;
  public errorMessage: string = null;

  constructor() {}

  ngOnInit() {}

  signUp(event: Event, userEmail: string) {
    if (event.type === 'click' && userEmail !== '') {
      this.thankYouMessage = 'Thanks for signig up!';
      return this.thankYouMessage;
    }
    this.errorMessage = 'Invalid email';
    return this.errorMessage;
  }
}
