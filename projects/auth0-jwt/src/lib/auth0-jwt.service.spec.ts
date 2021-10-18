import { TestBed } from '@angular/core/testing';

import { Auth0JwtService } from './auth0-jwt.service';

describe('Auth0JwtService', () => {
  let service: Auth0JwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth0JwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
