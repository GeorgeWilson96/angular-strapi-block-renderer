import { Component, Input } from '@angular/core';
import { StrapiNodeComponent, QuoteBlockNode } from '../node-interface';

@Component({
  selector: 'app-strapi-quote-block-renderer',
  templateUrl: './strapi-quote-block-renderer.component.html',
  styleUrl: './strapi-quote-block-renderer.component.scss',
})
export class StrapiQuoteBlockRendererComponent implements StrapiNodeComponent{
  @Input()
  node?: QuoteBlockNode;
  
}