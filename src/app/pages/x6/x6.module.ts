import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X6RoutingModule } from './x6-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    X6RoutingModule,
    NzButtonModule
  ],
  exports:[BaseComponent]
})
export class X6Module { }
