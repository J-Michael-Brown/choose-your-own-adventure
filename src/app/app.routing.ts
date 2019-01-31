import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { PoliceStationComponent } from './police-station/police-station.component';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { ChooseComponent } from './choose/choose.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ChooseComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'police-station',
    component: PoliceStationComponent
  },
  {
    path: 'orphanage',
    component: OrphanageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
