import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class SignUpComponent implements OnInit {
  model = { email: '', password: '' };
  showError!: boolean;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  handleRegister(form: any) {
    if (form.valid) {
      this.auth.SignUp(this.model.email, this.model.password);
    } else {
      this.showError = true;
    }
  }
}
