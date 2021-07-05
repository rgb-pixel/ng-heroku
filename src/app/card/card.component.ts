import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card!: Card;

  @Input() index!: number

  title: string = 'Card Title';
  text: string = 'Text for card';
  cardDate: Date = new Date();

  imgUrl: string = 'https://brandlogovector.com/wp-content/uploads/2020/08/React-Logo-Small.png';

  textColor: string = 'black';

  constructor() { }

  ChangeTitle(): void{
    this.card.title='Title has been changed';
  }

  // InputHandler(event:any){
  //   const value = event.target.value;
  //   this.card.title = value;
  // }

  InputHandler(value:any){
    this.card.title = value;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
    }, 3000)
  }

}
