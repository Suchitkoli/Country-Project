import { TestBed } from '@angular/core/testing';

import { UniversitydataService } from './universitydata.service';

describe('UniversitydataService', () => {
  let service: UniversitydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
