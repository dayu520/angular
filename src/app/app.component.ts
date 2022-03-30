import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import{NzSiderComponent} from 'ng-zorro-antd/layout';
import { ServiceService } from './services/service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _serviceService:ServiceService){

  }
  isCollapsed = false;
  public isCollapsedF():void {
    this.isCollapsed=!this.isCollapsed;
    this._serviceService.isCollapsed=this.isCollapsed
  }
}
