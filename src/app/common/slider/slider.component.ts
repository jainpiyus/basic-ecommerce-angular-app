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
      image: "https://www.tryloctite.in/themes/loctite/common/images/Offer-banner.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb25-RA-demo.png"
    },
    {
      text: "Festive Deer",
      image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb14-RA-demo.png"
    },
    {
      text: "Morning Greens",
      image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb05-RA-preview.png"
    },
  ];
 
  constructor() { }

  ngOnInit() {
  }


}
