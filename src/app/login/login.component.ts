import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/Ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user = {} as User;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private loginService: LoginService, 
    private fb: FormBuilder,
    private router: Router) {}

    ngOnInit() {
      this.loginForm = this.fb.group({
        mobileNumber: [''],
        password: ['']
      })
    }
    login(){
      if (this.loginForm.valid){
        this.user.mobileNumber = this.loginForm.value.mobileNumber;
        this.loginService.loggedIn.next(this.user);
        this.onNoClick();
      }
    }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
