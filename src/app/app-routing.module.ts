import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, Routes ,RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
//         LocationStrategy, HashLocationStrategy, AuxRoute} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppFormComponent } from './form/app.formComponent';

import { AboutComponent } from './about/about.component';
import { ChildOneComponent } from './about/child-one/child-one.component';
import { ChildTwoComponent } from './about/child-two/child-two.component';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';

import { DemoComponent } from './demo/demo.component';

import { LoginContComponent } from './containers/login-cont/login-cont.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'form', component: AppFormComponent },
    { path: 'demo', component: DemoComponent },
    {
        path: 'about', component: AboutComponent,
        children: [

            {
                path: '', redirectTo: 'child-two', pathMatch: 'full'
            },
            {
                path: 'child-one',
                component: ChildOneComponent
            },
            {
                path: 'child-three',
                component: ChildOneComponent
            },
            {
                path: 'child-two',
                component: ChildTwoComponent,
                outlet: 'childTwo'
            }
        ]
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashBoardComponent
    },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'toDo', loadChildren: './to-do/to-do.module#ToDoModule' },
    { path: 'login', component: LoginContComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'psdtut', loadChildren: './psdtut/psdtut.module#PsdtutModule'},

];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
