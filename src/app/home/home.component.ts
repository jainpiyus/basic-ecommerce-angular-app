import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions = 
  {
    items: 1, 
    dots: false, 
    navigation: false, 
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoHeightClass: 'owl-height',
    
}
images = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private productService: ProductService) {
    this.images = this.productService.getAllProducts();
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }

  productHome() {
    this.router.navigate(['product/12']);
    }

}
