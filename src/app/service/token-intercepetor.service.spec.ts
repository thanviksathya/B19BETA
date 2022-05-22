import { TestBed } from '@angular/core/testing';

import { TokenIntercepetorService } from './token-intercepetor.service';

describe('TokenIntercepetorService', () => {
  let service: TokenIntercepetorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntercepetorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
