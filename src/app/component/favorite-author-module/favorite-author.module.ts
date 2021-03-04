import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoriteAuthorRoutingModule} from './favorite-author-routing.module';
import {SharedModule} from '../../shared.module';
import {FavoriteAuthorComponent} from './favorite-author/favorite-author.component';


@NgModule({
  declarations: [FavoriteAuthorComponent],
  imports: [
    CommonModule,
    FavoriteAuthorRoutingModule,
    SharedModule
  ]
})
export class FavoriteAuthorModule {
}
