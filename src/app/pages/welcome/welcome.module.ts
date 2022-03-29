import { NgModule, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WelcomeComponent } from './welcome.component';
import { RouterModule,Routes } from '@angular/router';
import { WelcomeRoutingModule} from './welcome-routing.module'





@NgModule({
  imports: [
    NzButtonModule,
    RouterModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
