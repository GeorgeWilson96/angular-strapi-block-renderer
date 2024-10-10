import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiHeadingBlockRendererComponent } from './strapi-heading-block-renderer.component';

describe('StrapiHeadingBlockRendererComponent', () => {
  let component: StrapiHeadingBlockRendererComponent;
  let fixture: ComponentFixture<StrapiHeadingBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiHeadingBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiHeadingBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
