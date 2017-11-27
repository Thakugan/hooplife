import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../_modules/shared/shared.module';

import { GameService } from '../../_services/game.service';

import { LocationDetailsComponent } from '../../components/location-details/location-details.component';
import { LocationDetailsPageComponent } from '../../pages/location-details-page/location-details-page.component';
import { LocationSubmitComponent } from '../../components/location-submit/location-submit.component';
import { LocationSubmitPageComponent } from '../../pages/location-submit-page/location-submit-page.component';
import { GameComponent } from '../../components/game/game.component';
import { GameCreateComponent } from '../../components/game-create/game-create.component';
import { GameCreatePageComponent } from '../../pages/game-create-page/game-create-page.component';
import { GamesListPageComponent } from '../../pages/games-list-page/games-list-page.component';

@NgModule({
  declarations: [
    LocationDetailsComponent,
    LocationDetailsPageComponent,
    LocationSubmitComponent,
    LocationSubmitPageComponent,
    GameComponent,
    GameCreateComponent,
    GameCreatePageComponent,
    GamesListPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    GameService
  ]
})
export class GamesModule { }
