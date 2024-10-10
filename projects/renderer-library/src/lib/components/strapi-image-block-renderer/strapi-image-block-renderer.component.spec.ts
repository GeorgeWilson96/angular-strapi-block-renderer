import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiImageBlockRendererComponent } from './strapi-image-block-renderer.component';

describe('StrapiImageBlockRendererComponent', () => {
  let component: StrapiImageBlockRendererComponent;
  let fixture: ComponentFixture<StrapiImageBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiImageBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiImageBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
