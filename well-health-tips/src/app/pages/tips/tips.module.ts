import { NgModule } from '@angular/core';

import { TipsComponent } from './tips.component';
import { TipsListComponent } from './components/tips-list/tips-list.component';
import { TipsDetailComponent } from './components/tips-detail/tips-detail.component';
import {TipsRoutingModule} from './tips-routing.module';
import {CommonModule} from '@angular/common';
import {GetTypeColourPipe} from '../../pipes/get-type-colour.pipe';

@NgModule({
  declarations: [
    TipsComponent,
    TipsListComponent,
    TipsDetailComponent,
    GetTypeColourPipe
  ],
    imports: [
      TipsRoutingModule,
      CommonModule,
    ],
  providers: [],
  bootstrap: []
})
export class TipsModule { }
