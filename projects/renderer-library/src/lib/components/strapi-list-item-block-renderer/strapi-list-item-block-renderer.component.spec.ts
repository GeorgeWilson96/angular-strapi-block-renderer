import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrapiListItemBlockRendererComponent } from './strapi-list-item-block-renderer.component';

describe('StrapiListItemBlockRendererComponent', () => {
  let component: StrapiListItemBlockRendererComponent;
  let fixture: ComponentFixture<StrapiListItemBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiListItemBlockRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrapiListItemBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
