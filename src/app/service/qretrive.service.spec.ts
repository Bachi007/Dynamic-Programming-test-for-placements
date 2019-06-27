import { TestBed } from '@angular/core/testing';

import { QretriveService } from './qretrive.service';

describe('QretriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QretriveService = TestBed.get(QretriveService);
    expect(service).toBeTruthy();
  });
});
