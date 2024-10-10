import { Directive, Input, TemplateRef } from '@angular/core';
import { StrapiNodeTypes } from '../node-interface';

@Directive({
  selector: '[templateOverride]'
})
export class TemplateOverride {

  @Input('templateOverride') type?: StrapiNodeTypes;
  constructor(public template: TemplateRef<any>) { }

}
