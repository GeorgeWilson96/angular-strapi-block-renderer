import { Component, Input } from '@angular/core';
import { ParagraphBlockNode, StrapiNodeComponent } from '../node-interface';

@Component({
  selector: 'app-strapi-paragraph-block-renderer',
  templateUrl: './strapi-paragraph-block-renderer.component.html',
  styleUrl: './strapi-paragraph-block-renderer.component.scss',
})
export class StrapiParagraphBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: ParagraphBlockNode;
  
}
