import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListItemComponent} from '../common/list-item/list-item.component';
import {FavoriteAuthorComponent} from './favorite-author/favorite-author.component';

const routes: Routes = [
  {path: '', component: FavoriteAuthorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteAuthorRoutingModule {
}
