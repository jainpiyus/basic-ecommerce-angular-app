import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carouselOptions = 
    {
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  }
  
 
  images = [
    
    {
      text: "Festive Deer",
      image: "https://mindstack.in/blog/wp-content/uploads/2018/01/ecommerce-banner.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://about.zination.com/wp-content/uploads/2018/05/ecommerce-banner11.png"
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }


}
