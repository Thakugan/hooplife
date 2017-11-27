import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../_guards/auth.guard';
import { LoginGuard } from '../../_guards/login.guard';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { LocationDetailsPageComponent } from '../../pages/location-details-page/location-details-page.component';
import { UserPageComponent } from '../../pages/user-page/user-page.component';
import { LocationSubmitPageComponent } from '../../pages/location-submit-page/location-submit-page.component';
import { GameCreatePageComponent } from '../../pages/game-create-page/game-create-page.component';
import { GamesListPageComponent } from '../../pages/games-list-page/games-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/games', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'games', component: GamesListPageComponent, canActivate: [AuthGuard] },
      { path: 'gameSubmit', component: GameCreatePageComponent, canActivate: [AuthGuard] },
      { path: 'location', component: LocationDetailsPageComponent, canActivate: [AuthGuard] },
      { path: 'locationSubmit', component: LocationSubmitPageComponent, canActivate: [AuthGuard] },
      { path: 'user/:username', component: UserPageComponent, canActivate: [AuthGuard] },
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
  providers: [
    AuthGuard,
    LoginGuard
  ]
})

export class AppRoutingModule { }
