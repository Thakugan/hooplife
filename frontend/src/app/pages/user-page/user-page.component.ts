import { Component, Input, OnInit } from '@angular/core';
import { UserPublicComponent } from '../../components/user-public/user-public.component';
import { UserPrivateComponent } from '../../components/user-private/user-private.component'

@Component({
  selector: 'app-user-public-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent implements OnInit {

	public isPublic: boolean;

	constructor() {
		this.isPublic = true;
	}

  	ngOnInit() {
  	}

}