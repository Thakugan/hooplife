import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { LocationDetailsPageComponent } from '../../pages/location-details-page/location-details-page.component';
import { UserPageComponent } from '../../pages/user-page/user-page.component';
import { LocationSubmitPageComponent } from '../../pages/location-submit-page/location-submit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'chat', component: LocationDetailsPageComponent, canActivate: [AuthGuard] },
      { path: 'location', component: LocationDetailsPageComponent },
      { path: 'locationSubmit', component: LocationSubmitPageComponent },
      { path: 'user', component: UserPageComponent },
    ]
  },
  { path: '**', component: DashboardComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
