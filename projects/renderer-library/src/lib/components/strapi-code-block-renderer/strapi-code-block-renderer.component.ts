import { Component, Input } from '@angular/core';
import { StrapiNodeComponent,HeadingBlockNode } from '../node-interface';

@Component({
  selector: 'app-strapi-code-block-renderer',
  templateUrl: './strapi-code-block-renderer.component.html',
  styleUrl: './strapi-code-block-renderer.component.scss',
})
export class StrapiCodeBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: HeadingBlockNode;
  
}