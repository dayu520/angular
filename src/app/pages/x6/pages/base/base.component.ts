import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Graph,DataUri  } from '@antv/x6';
import { Input,ViewChild,ElementRef} from '@angular/core';
import * as $ from 'JQuery';
import { fromEvent } from 'rxjs';
import { ServiceService } from '../../../../services/service.service';
import { Shape } from '@antv/x6'
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit,AfterViewInit {
  public graph!:Graph
  @ViewChild("container") container: ElementRef<HTMLParagraphElement> | undefined
  @ViewChild("containerWrap") containerWrap: ElementRef<HTMLParagraphElement> | undefined
  
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
      {
        id: 'node4',
        shape: 'ellipse', // 使用 ellipse 渲染
        x: 300,
        y: 200,
        width: 80,
        height: 40,
        label: 'world',
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
  public lastCollapsed=false;
  constructor(private _serviceService:ServiceService) { }

  ngOnInit(): void {
    this.lastCollapsed=this._serviceService.isCollapsed
  }
  ngAfterViewInit(): void {
    this.settingGraph()
  }

  ngAfterViewChecked(): void {
    if(this._serviceService.isCollapsed!=this.lastCollapsed){
      this.graph.resize($('#containerWrap').width(), 600);

      this.lastCollapsed=this._serviceService.isCollapsed
    }
  }


  public export(){
 
    this.graph?.toSVG((dataUri: string) => {
      // 下载
      DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg')
    },{
      copyStyles:false
    })
  }


  public settingGraph():void {
    this.graph = new Graph ({
        container:this.container?.nativeElement,
        width:$('#containerWrap').width(),
        height: 600,
        panning: {
          enabled: true,
          modifiers: 'shift',
        },
        background: {
          color: '#fffbe6', // 设置画布背景颜色
        },
        grid: {
          size: 10,      // 网格大小 10px
          visible: true, // 渲染网格背景
        },
    })

    this.graph.fromJSON(this.data)
    
    // this.graph.zoom(-0.5)
    // this.graph.translate(80, 40)
    

  }

  public addPoint(): void {
    const rect = this.graph.addNode({
      shape: 'rect',
      x: 100,
      y: 200,
      width: 80,
      height: 40,
      label: 'rect', 
    })
    
    const circle = this.graph.addNode({
      shape: 'circle',
      x: 280,
      y: 200,
      width: 60,
      height: 60,
      label: 'circle', 
      zIndex: 2,
    })
    
    const edge = this.graph.addEdge({
      shape: 'edge',
      source: rect,
      target: circle,
    })

  }
}
