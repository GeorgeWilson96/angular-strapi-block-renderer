import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiRendererComponent } from './components/strapi-renderer/strapi-renderer.component';
import { StrapiCodeBlockRendererComponent } from './components/strapi-code-block-renderer/strapi-code-block-renderer.component';
import { StrapiHeadingBlockRendererComponent } from './components/strapi-heading-block-renderer/strapi-heading-block-renderer.component';
import { StrapiImageBlockRendererComponent } from './components/strapi-image-block-renderer/strapi-image-block-renderer.component';
import { StrapiLinkBlockRendererComponent } from './components/strapi-link-block-renderer/strapi-link-block-renderer.component';
import { StrapiListBlockRendererComponent } from './components/strapi-list-block-renderer/strapi-list-block-renderer.component';
import { StrapiListItemBlockRendererComponent } from './components/strapi-list-item-block-renderer/strapi-list-item-block-renderer.component';
import { StrapiParagraphBlockRendererComponent } from './components/strapi-paragraph-block-renderer/strapi-paragraph-block-renderer.component';
import { StrapiQuoteBlockRendererComponent } from './components/strapi-quote-block-renderer/strapi-quote-block-renderer.component';
import { StrapiTextBlockRendererComponent } from './components/strapi-text-block-renderer/strapi-text-block-renderer.component';
import { TemplateOverride } from './components/directives/template-override.directive';



@NgModule({
  declarations: [
    StrapiRendererComponent,
    StrapiCodeBlockRendererComponent,
    StrapiHeadingBlockRendererComponent,
    StrapiImageBlockRendererComponent,
    StrapiLinkBlockRendererComponent,
    StrapiListBlockRendererComponent,
    StrapiListItemBlockRendererComponent,
    StrapiParagraphBlockRendererComponent,
    StrapiQuoteBlockRendererComponent,
    StrapiTextBlockRendererComponent,
    TemplateOverride,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StrapiRendererComponent
  ]
})
export class ComponentsModule {}
