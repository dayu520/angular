import { Component } from '@angular/core';
import { Graph } from '@antv/x6';
import { Output, EventEmitter,Input } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild("container") container: ElementRef<HTMLParagraphElement> | undefined
  public graph!: Graph

  
  public data = {
    // 节点
    nodes: [
      {
        id: 'node1', // String，可选，节点的唯一标识
        x: 40,       // Number，必选，节点位置的 x 值
        y: 40,       // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'hello', // String，节点标签
      },
      {
        id: 'node2', // String，节点的唯一标识
        x: 160,      // Number，必选，节点位置的 x 值
        y: 180,      // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'world', // String，节点标签
      },
    ],
    // 边
    edges: [
      {
        source: 'node1', // String，必须，起始节点 id
        target: 'node2', // String，必须，目标节点 id
      },
    ],
  };


  constructor(){

  }

  ngAfterViewInit() {
    this.setGraph();
    this.graph.fromJSON(this.data)
  }

  setGraph(){
    this.graph =new Graph({
      container: this.container?.nativeElement,
      width: 800,
      height: 600,
    });

    
  }


}
