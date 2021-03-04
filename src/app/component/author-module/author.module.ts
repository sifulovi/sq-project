import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorRoutingModule} from './author-routing.module';
import {SharedModule} from '../../shared.module';
import {AuthorComponent} from './author/author.component';


@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule
  ]
})
export class AuthorModule {
}
