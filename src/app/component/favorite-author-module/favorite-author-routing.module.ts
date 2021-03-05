import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
