import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiCodeBlockRendererComponent } from './strapi-code-block-renderer.component';

describe('StrapiCodeBlockRendererComponent', () => {
  let component: StrapiCodeBlockRendererComponent;
  let fixture: ComponentFixture<StrapiCodeBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiCodeBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiCodeBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
