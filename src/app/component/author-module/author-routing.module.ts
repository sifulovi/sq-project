import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListItemComponent} from '../common/list-item/list-item.component';
import {AuthorComponent} from './author/author.component';

const routes: Routes = [
  {path: '', component: AuthorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
