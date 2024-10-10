import { Component, Input } from '@angular/core';
import { StrapiNodeComponent, ListItemInlineNode } from '../node-interface';

@Component({
  selector: 'app-strapi-list-item-block-renderer',
  templateUrl: './strapi-list-item-block-renderer.component.html',
  styleUrl: './strapi-list-item-block-renderer.component.scss',
})
export class StrapiListItemBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: ListItemInlineNode;
  
}