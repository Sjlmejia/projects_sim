import { TestBed } from '@angular/core/testing';

import { FirebaseRealtimeDatabaseService } from './firebase-realtime-database.service';

describe('FirebaseRealtimeDatabaseService', () => {
  let service: FirebaseRealtimeDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseRealtimeDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
