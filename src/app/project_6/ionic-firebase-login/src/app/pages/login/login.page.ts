// src/app/pages/login/login.page.ts

import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  login(): void {
    this.firebaseService.login(this.username, this.password)
      .then(() => {
        this.router.navigate(['/items']);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  }
}
