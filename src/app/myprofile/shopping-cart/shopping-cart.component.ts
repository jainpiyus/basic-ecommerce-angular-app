import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  
  cart = [
    {
      text: "Everfresh Flowers",
      image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
    },
    {
      text: "Festive Deer",
      image: "https://cdn140.picsart.com/268948212025211.png?r1024x1024"
    },
    {
      text: "Morning Greens",
      image: "http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"
    },
    {
      text: "Everfresh Flowers",
      image: "https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
