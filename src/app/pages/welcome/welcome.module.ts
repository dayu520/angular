import { NgModule, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WelcomeComponent } from './welcome.component';
import { RouterModule,Routes } from '@angular/router';
import { WelcomeRoutingModule} from './welcome-routing.module'
import { NzDividerModule } from 'ng-zorro-antd/divider';




@NgModule({
  imports: [
    NzButtonModule,
    RouterModule,
    WelcomeRoutingModule,
    NzDividerModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
