import { Component, Input } from '@angular/core';
import { StrapiNodeComponent,LinkInlineNode } from '../node-interface';

@Component({
  selector: 'app-strapi-link-block-renderer',
  templateUrl: './strapi-link-block-renderer.component.html',
  styleUrl: './strapi-link-block-renderer.component.scss',
})
export class StrapiLinkBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: LinkInlineNode;
  
}