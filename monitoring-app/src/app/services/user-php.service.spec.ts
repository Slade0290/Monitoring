import { TestBed } from '@angular/core/testing';

import { UserPHPService } from './user-php.service';

describe('UserPHPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPHPService = TestBed.get(UserPHPService);
    expect(service).toBeTruthy();
  });
});
