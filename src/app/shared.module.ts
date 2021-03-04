import {NgModule} from '@angular/core';
import {ListItemComponent} from './component/common/list-item/list-item.component';
import {AntSharedModule} from './ant-shared.module';
import {CommonModule} from '@angular/common';
import {CardComponent} from './component/common/card/card.component';

@NgModule({
  declarations: [ListItemComponent, CardComponent],
  imports: [
    AntSharedModule,
    CommonModule
  ],
  exports: [ListItemComponent]
})
export class SharedModule {
}
