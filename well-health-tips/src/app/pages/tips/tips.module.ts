import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TipsComponent } from './tips.component';
import { TipsListComponent } from './components/tips-list/tips-list.component';
import { TipsDetailComponent } from './components/tips-detail/tips-detail.component';
import {RouterModule} from '@angular/router';
import {TipsRoutingModule} from './tips-routing.module';

@NgModule({
  declarations: [
    TipsComponent,
    TipsListComponent,
    TipsDetailComponent
  ],
  imports: [TipsRoutingModule],
  providers: [],
  bootstrap: []
})
export class TipsModule { }
