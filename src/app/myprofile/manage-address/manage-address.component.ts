import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.scss']
})
export class ManageAddressComponent implements OnInit {

  addressForm:FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      pincode:[],
      locality: [],
      address: []
    })
  }

}
