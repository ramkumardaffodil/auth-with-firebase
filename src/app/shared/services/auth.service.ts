import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private routes: Router
  ) {}

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        localStorage.setItem('user', JSON.stringify(new Date().getTime()));
        console.log('You are Successfully signed up!');
        window.location.reload();
        //this.routes.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        localStorage.setItem('user', JSON.stringify(new Date().getTime()));
        console.log('Log in!');
        window.location.reload();
        //this.routes.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }

  SignOut() {
    this.angularFireAuth.signOut();
    localStorage.removeItem('user');
  }
}
