import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.scss']
})
export class SavedCardsComponent implements OnInit {

  cardForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      pincode: [],
      locality: [],
      address: []
    })
  }

}
