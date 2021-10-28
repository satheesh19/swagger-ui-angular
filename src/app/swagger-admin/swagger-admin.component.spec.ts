import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerAdminComponent } from './swagger-admin.component';

describe('SwaggerAdminComponent', () => {
  let component: SwaggerAdminComponent;
  let fixture: ComponentFixture<SwaggerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaggerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
