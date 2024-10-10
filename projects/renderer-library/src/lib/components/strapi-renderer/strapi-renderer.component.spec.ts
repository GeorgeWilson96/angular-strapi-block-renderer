import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiRendererComponent } from './strapi-renderer.component';

describe('StrapiRendererComponent', () => {
  let component: StrapiRendererComponent;
  let fixture: ComponentFixture<StrapiRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrapiRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
