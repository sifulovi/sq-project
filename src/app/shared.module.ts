import {NgModule} from '@angular/core';
import {ListItemComponent} from './component/common/list-item/list-item.component';
import {AntSharedModule} from './ant-shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    AntSharedModule,
    CommonModule
  ],
  exports: [ListItemComponent]
})
export class SharedModule {
}
