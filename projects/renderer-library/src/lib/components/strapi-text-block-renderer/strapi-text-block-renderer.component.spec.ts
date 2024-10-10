import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiTextBlockRendererComponent } from './strapi-text-block-renderer.component';

describe('StrapiTextBlockRendererComponent', () => {
  let component: StrapiTextBlockRendererComponent;
  let fixture: ComponentFixture<StrapiTextBlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiTextBlockRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrapiTextBlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
