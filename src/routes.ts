import { Routes } from '@angular/router';
import { AuthGuard } from './app/auth.guard';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { SignInComponent } from './app/components/login/login.component';
import { SignUpComponent } from './app/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

export default routes;
