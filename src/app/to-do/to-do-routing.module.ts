import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './to-do.component';

import { ActiveComponent } from './active/active.component';
import { CompleteComponent } from './complete/complete.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { ListResolve } from './list/list-resolve.service';
import { EditResolve } from './edit/edit-resolve.serivce';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ToDoComponent,
    canActivate: [AuthGuard],
    resolve: {
      list: ListResolve
    },
    children: [
      {
        path: 'viewAll',
        // component: ListComponent,
      },
      {
        path: 'active',
        component: ActiveComponent,
      },
      {
        path: 'completed',
        component: CompleteComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        resolve: {
          // list: ListResolve,
          toDoItem: EditResolve
        },
      }
    ]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class ToDoRoutingModule { }

export const ToDoRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
