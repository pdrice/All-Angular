import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatsComponent } from './stats/stats.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
