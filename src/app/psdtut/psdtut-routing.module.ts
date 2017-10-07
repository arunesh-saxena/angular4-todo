import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsdtutComponent } from './psdtut.component';

const routes: Routes = [
  {
    path: '', component: PsdtutComponent
  },
];


export const psdtutRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
