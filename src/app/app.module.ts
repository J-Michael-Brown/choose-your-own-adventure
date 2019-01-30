import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { PlayersService } from './players.service';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PoliceStationComponent } from './police-station/police-station.component';
import { OrphanageComponent } from './orphanage/orphanage.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL
};

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PoliceStationComponent,
    OrphanageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
