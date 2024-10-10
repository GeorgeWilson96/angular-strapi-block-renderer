import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiQuoteBlockRendererComponent } from './strapi-quote-block-renderer.component';

describe('StrapiQuoteBlockRendererComponent', () => {
  let component: StrapiQuoteBlockRendererComponent;
  let fixture: ComponentFixture<StrapiQuoteBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiQuoteBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiQuoteBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
