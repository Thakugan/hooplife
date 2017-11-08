import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './_modules/app-routing/app-routing.module';
import { UserModule } from './_modules/user/user.module';

import { AppComponent } from './app.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationDetailsPageComponent } from './pages/location-details-page/location-details-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailsComponent,
    LocationDetailsPageComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
