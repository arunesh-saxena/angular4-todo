import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AsideComponent } from '../aside/aside.component';

import { HighlightDirective } from '../directive/highlight.directive';

import { CommonService } from '../service/common.service';
import { UserService } from '../service/user.service';
import { AuthGuard } from '../../guards/auth.guard';
import { CustomModelComponent } from '../custom-modal/custom-modal.component';

import { ApiService } from '../service/api.service';
import { ListComponent } from '../list/list.component';

import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/loader.service';
import { CustomToolTipComponent } from '../custom-tool-tip/custom-tool-tip.component';

import { SplitterComponent } from '../splitter/splitter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AsideComponent,
    HighlightDirective,
    CustomModelComponent,
    ListComponent,
    LoaderComponent,
    CustomToolTipComponent,
    SplitterComponent
  ],
  declarations: [
    AsideComponent,
    HighlightDirective,
    CustomModelComponent,
    ListComponent,
    LoaderComponent,
    CustomToolTipComponent,
    SplitterComponent
  ],
  providers: [CommonService, UserService, AuthGuard, ApiService, LoaderService]
})
export class SharedModule {
  constructor(private commonService: CommonService,
    private userService: UserService) {

  }
}
