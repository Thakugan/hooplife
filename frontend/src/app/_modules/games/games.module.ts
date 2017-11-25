import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../_modules/shared/shared.module';

import { LocationDetailsComponent } from '../../components/location-details/location-details.component';
import { LocationDetailsPageComponent } from '../../pages/location-details-page/location-details-page.component';
import { LocationSubmitComponent } from '../../components/location-submit/location-submit.component';
import { LocationSubmitPageComponent } from '../../pages/location-submit-page/location-submit-page.component';

@NgModule({
  declarations: [
    LocationDetailsComponent,
    LocationDetailsPageComponent,
    LocationSubmitComponent,
    LocationSubmitPageComponent
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
export class GamesModule { }
