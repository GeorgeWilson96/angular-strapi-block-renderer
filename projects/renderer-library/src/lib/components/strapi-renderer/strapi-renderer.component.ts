import {
  Component,
  Input,
} from '@angular/core';
import * as blocks from '../node-interface';

@Component({
  selector: 'strapi-renderer',
  templateUrl: './strapi-renderer.component.html',
  styleUrl: './strapi-renderer.component.scss',
})
export class StrapiRendererComponent{
  @Input()
  content?: blocks.StrapiNode[];
}
