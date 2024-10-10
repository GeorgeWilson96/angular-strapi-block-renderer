import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiParagraphBlockRendererComponent } from './strapi-paragraph-block-renderer.component';

describe('StrapiParagraphBlockRendererComponent', () => {
  let component: StrapiParagraphBlockRendererComponent;
  let fixture: ComponentFixture<StrapiParagraphBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiParagraphBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiParagraphBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
