import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StrapiNodeComponent,TextInlineNode } from '../node-interface';

@Component({
  selector: 'app-strapi-text-block-renderer',
  templateUrl: './strapi-text-block-renderer.component.html',
  styleUrl: './strapi-text-block-renderer.component.scss'
})
export class StrapiTextBlockRendererComponent implements StrapiNodeComponent, OnChanges{
  styleClass:string = '';
  ngOnChanges(changes: SimpleChanges): void {
    if (this.node){
      this.styleClass = `${this.node?.bold ? 'b' : ''} ${this.node?.italic ? 'i' : ''} ${this.node?.strikethrough ? 's' : ''} ${this.node?.underline ? 'u' : ''} ${this.node?.code ? 'c' : ''}` 

    }
  }
  @Input()
  node?: TextInlineNode;
  
}