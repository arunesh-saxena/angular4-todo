import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { ActiveComponent } from './active/active.component';
import { ListComponent } from './list/list.component';
import { TodoDataService } from './todo-data.service';
import { EditComponent } from './edit/edit.component';

import { ListResolve } from './list/list-resolve.service';
import { EditResolve } from './edit/edit-resolve.serivce';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  imports: [
    CommonModule,
    ToDoRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  declarations: [ToDoComponent, ActiveComponent, ListComponent, EditComponent, CompleteComponent],
  providers: [
    TodoDataService,
    ListResolve,
    EditResolve
  ]
})
export class ToDoModule { }
