import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

import { AuthService } from '../../_services/auth.service';
import { Login } from '../../_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: Login = new Login();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    var status;
    this.authService.login(this.auth).subscribe(
      (response) => { status = response.status }
    );

    if(status == 200) {
      localStorage.setItem('auth', this.authService.getJWT({user: this.auth.username}));
    } else {
      alert('Login failed');
      return;
    }

    this.router.navigate(['/dashboard']);
  }

}
