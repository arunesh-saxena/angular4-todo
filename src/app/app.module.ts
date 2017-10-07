// our root app component
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NoopInterceptorService} from './common/service/noop-interceptor.service';

// import { AlertModule, AccordionModule, ModalModule, DatepickerModule } from 'ng2-bootstrap';
// import {  } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
// Include the three components we created
import { AppRoutingModule } from './app-routing.module';

import { AppFormComponent } from './form/app.formComponent';
import { SimpleFormComponent } from './form/app.simpleform';
import { ComplexFormComponent } from './form/app.complexform';
import { FormValidationComponent } from './form/app.formvalidation';
import { AboutComponent } from './about/about.component';

import { DashBoardComponent } from './dash-board/dash-board.component';

// import { AsideComponent } from './common/aside/aside.component';
import { SharedModule } from './common/shared/shared.module';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChildOneComponent } from './about/child-one/child-one.component';
import { ChildTwoComponent } from './about/child-two/child-two.component';
import { HeaderComponent } from './header/header.component';

// import { AdminModule } from './admin/admin.module';
import { ToDoModule } from './to-do/to-do.module';
import { ChatWindowComponent } from './common/ChatWindow/ChatWindow.Component';

import { DemoComponent } from './demo/demo.component';

/* drag and drop */

import { DndModule } from 'ng2-dnd';
import { SimpledndComponent } from './dnd/simplednd/simplednd.component';
import { SimpleSortableComponent } from './dnd/simplpe-sortable/simple-sortable.component';
import { SimpleSortableCopy } from './dnd/simple-sortable-copy/simple-sortable-copy.component';
import { MultiSortableComponent } from './dnd/multi-sortable/multi-sortable.component';

import { DragulaModule } from 'ng2-dragula';
import { DragulaTestComponent } from './dragula/dragula-test/dragula-test.component';
import { ShoppingBasketComponent } from './dnd/shopping-basket/shopping-basket.component';

import { CONSTANTS } from './constants';

import { LoginContComponent } from './containers/login-cont/login-cont.component';
import { LoginContService } from './containers/login-cont/login-cont.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TestComponent } from './demo/test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    // AlertModule.forRoot(),
    // AccordionModule.forRoot(),
    // ModalModule.forRoot(),
    // DatepickerModule.forRoot(),
    NgbModule.forRoot(),
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ToDoModule,
    SharedModule,
    AppRoutingModule,
    DndModule.forRoot(),
    DragulaModule
  ],
  declarations: [
    AppComponent,
    // Declare the three components as part of the root NgModule
    AppFormComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
    AboutComponent,
    DashBoardComponent,
    FooterComponent,
    HomeComponent,
    ChildOneComponent,
    ChildTwoComponent,
    HeaderComponent,
    ChatWindowComponent,
    DemoComponent,
    SimpledndComponent,
    SimpleSortableComponent,
    SimpleSortableCopy,
    MultiSortableComponent,
    DragulaTestComponent,
    ShoppingBasketComponent,
    LoginComponent,
    RegisterComponent,
    LoginContComponent,
    LogoutComponent,
    TestComponent
  ],
  entryComponents: [],
  providers: [
    LoginContService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
