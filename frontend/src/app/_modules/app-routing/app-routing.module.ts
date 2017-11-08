import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { LocationDetailsPageComponent } from '../../pages/location-details-page/location-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationDetailsPageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard/chat', pathMatch: 'full' },
      { path: 'chat', component: LocationDetailsPageComponent }
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
