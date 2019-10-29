import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/Ilogin';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loadingEnable: boolean;
  sidenavEnable = false;
  user: User;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public dialog: MatDialog, private router: Router, 
    public loginService: LoginService,
    public loadingService: LoadingService) { }


  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    this.loadingService.progressEnable.subscribe(next => {
      this.loadingEnable = next;
    });
  }


  enableSidenav() {
    this.sidenavEnable = !this.sidenavEnable;
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  logout() {
    this.user = null;

    this.loginService.loggedIn.next(this.user);
    this.router.navigate(['home']);
  }
}
