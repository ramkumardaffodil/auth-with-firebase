import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auth-with-firebase';
  userStatus: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.userStatus = true;
      this.router.navigate(['/dashboard']);
    }
  }
  handleLogout() {
    localStorage.removeItem('user');
    this.userStatus = false;
    this.router.navigate(['/login']);
  }
  handleIsLoginEvent() {
    console.log('in is login event');
  }
}
