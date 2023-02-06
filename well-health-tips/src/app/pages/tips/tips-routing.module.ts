import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsComponent } from './tips.component';
import {TipsListComponent} from './components/tips-list/tips-list.component';
import {TipsDetailComponent} from './components/tips-detail/tips-detail.component';
import {TipsListResolver} from './tips.resolver';

const routes: Routes = [
  {
    path: '',
    component: TipsComponent,
    children: [
      {
        path: 'list',
        component: TipsListComponent,
        resolve: { tipsList: TipsListResolver },
      },
      {
        path: 'detail',
        component: TipsDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
