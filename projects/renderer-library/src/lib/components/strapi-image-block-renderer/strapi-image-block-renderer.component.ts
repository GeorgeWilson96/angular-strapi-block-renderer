import { Component, Input } from '@angular/core';
import { StrapiNodeComponent, ImageBlockNode } from '../node-interface';

@Component({
  selector: 'app-strapi-image-block-renderer',
  templateUrl: './strapi-image-block-renderer.component.html',
  styleUrl: './strapi-image-block-renderer.component.scss',
})
export class StrapiImageBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: ImageBlockNode;
  
}