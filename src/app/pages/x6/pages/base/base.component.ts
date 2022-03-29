import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Graph } from '@antv/x6';
import { Input,ViewChild,ElementRef} from '@angular/core'
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit,AfterViewInit {
  @Input() graph?:Graph
  @ViewChild("container") container: ElementRef<HTMLParagraphElement> | undefined

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



  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.settingGraph()
  }
  public settingGraph():void {
    this.graph = new Graph ({
        container:this.container?.nativeElement,
        width: 800,
        height: 600,
        panning:true
    })

    this.graph.fromJSON(this.data)

  }
}
