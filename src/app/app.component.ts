import { Component } from '@angular/core';
export interface Card{
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-heroku';

  toggle: boolean = true; 

  cards: Card[] = [
    {title: 'First card and Egor number 1 too', text: 'This is card number 1'},
    {title: 'Second card', text: 'This is card number 2'},
    {title: 'Last card', text: 'This is card number 3'}
  ];

  toggleCards(): void{
    this.toggle = !this.toggle;
  }
}
