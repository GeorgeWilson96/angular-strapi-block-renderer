import { Component, Input } from '@angular/core';
import { StrapiNodeComponent,HeadingBlockNode } from '../node-interface';

@Component({
  selector: 'app-strapi-heading-block-renderer',
  templateUrl: './strapi-heading-block-renderer.component.html',
  styleUrl: './strapi-heading-block-renderer.component.scss',
})
export class StrapiHeadingBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: HeadingBlockNode;
  
}
