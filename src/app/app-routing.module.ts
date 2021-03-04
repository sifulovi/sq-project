import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/authors'},
  {path: 'authors', loadChildren: () => import('./component/author-module/author.module').then(m => m.AuthorModule)},
  {
    path: 'favorite-authors',
    loadChildren: () => import('./component/favorite-author-module/favorite-author.module').then(m => m.FavoriteAuthorModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
