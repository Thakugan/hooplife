import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../../_modules/app-routing/app-routing.module';

import { ProfileService } from '../../_services/profile.service';

import { RatingComponent } from '../../components/rating/rating.component';
import { CommentComponent } from '../../components/comment/comment.component';

@NgModule({
  declarations: [
    RatingComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    // NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ProfileService
  ],
  exports: [
    RatingComponent,
    CommentComponent
  ]
})
export class SharedModule { }
