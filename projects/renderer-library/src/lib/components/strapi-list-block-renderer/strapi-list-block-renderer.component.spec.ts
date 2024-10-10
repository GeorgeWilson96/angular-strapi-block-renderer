import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiListBlockRendererComponent } from './strapi-list-block-renderer.component';

describe('StrapiListBlockRendererComponent', () => {
  let component: StrapiListBlockRendererComponent;
  let fixture: ComponentFixture<StrapiListBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiListBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiListBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
