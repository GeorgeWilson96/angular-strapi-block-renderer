import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiLinkBlockRendererComponent } from './strapi-link-block-renderer.component';

describe('StrapiLinkBlockRendererComponent', () => {
  let component: StrapiLinkBlockRendererComponent;
  let fixture: ComponentFixture<StrapiLinkBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiLinkBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiLinkBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
