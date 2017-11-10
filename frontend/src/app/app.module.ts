import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Mock API Stuff
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_services/in-memory-data.service';

import { AppRoutingModule } from './_modules/app-routing/app-routing.module';
import { UserModule } from './_modules/user/user.module';

import { AppComponent } from './app.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationDetailsPageComponent } from './pages/location-details-page/location-details-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RatingComponent } from './components/rating/rating.component';
import { CommentComponent } from './components/comment/comment.component';
import { LocationSubmitComponent } from './components/location-submit/location-submit.component';
import { LocationSubmitPageComponent } from './pages/location-submit-page/location-submit-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPrivateComponent } from './components/user-private/user-private.component';
import { UserPublicComponent } from './components/user-public/user-public.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailsComponent,
    LocationDetailsPageComponent,
    DashboardComponent,
    NavigationComponent,
    RatingComponent,
    CommentComponent,
    LocationSubmitComponent,
    LocationSubmitPageComponent,
    UserPrivateComponent,
    UserPublicComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
