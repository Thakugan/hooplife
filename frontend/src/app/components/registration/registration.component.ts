import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';

import { User } from '../../_models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  tempUser: User = new User();
  passConfirmation: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    if(this.tempUser.password != this.passConfirmation) {
      alert("Passwords do not match. Try again.");
      return;
    }

    var status;
    this.authService.addUser(this.tempUser).subscribe(
      (response) => { status = response.status }
    );

    if(status == 200) {
      localStorage.setItem('auth', this.authService.getJWT({user: this.tempUser.username}));
    } else {
      alert('User could not be created');
      return;
    }

    this.tempUser = new User();
    this.router.navigate(['/dashboard']);
  }

}
