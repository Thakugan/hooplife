import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../_modules/shared/shared.module';

import { UserPageComponent } from '../../pages/user-page/user-page.component';
import { UserPrivateComponent } from '../../components/user-private/user-private.component';
import { UserPublicComponent } from '../../components/user-public/user-public.component';

@NgModule({
  declarations: [
    UserPrivateComponent,
    UserPublicComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class ProfileModule { }
