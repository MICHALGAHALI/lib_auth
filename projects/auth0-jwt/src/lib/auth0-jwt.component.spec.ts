import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0JwtComponent } from './auth0-jwt.component';

describe('Auth0JwtComponent', () => {
  let component: Auth0JwtComponent;
  let fixture: ComponentFixture<Auth0JwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0JwtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0JwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
