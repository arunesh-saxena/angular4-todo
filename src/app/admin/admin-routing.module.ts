import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
];


export const AdminRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
