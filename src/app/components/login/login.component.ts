import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class SignInComponent implements OnInit {
  model = { email: '', password: '' };
  showError!: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  handleLogin(form: any) {
    if (form.valid) {
      this.auth.SignIn(this.model.email, this.model.password);
    } else {
      this.showError = true;
    }
  }
}
