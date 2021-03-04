import {NgModule} from '@angular/core';
import {ListItemComponent} from './component/common/list-item/list-item.component';

@NgModule({
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
})
export class SharedModule {
}
