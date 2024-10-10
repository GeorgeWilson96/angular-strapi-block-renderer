import { Component, Input } from '@angular/core';
import { StrapiNodeComponent,ListBlockNode } from '../node-interface';

@Component({
  selector: 'app-strapi-list-block-renderer',
  templateUrl: './strapi-list-block-renderer.component.html',
  styleUrl: './strapi-list-block-renderer.component.scss',
})
export class StrapiListBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: ListBlockNode;
  
}