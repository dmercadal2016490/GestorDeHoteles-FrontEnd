import { TestBed } from '@angular/core/testing';

import { RestHabitacionService } from './rest-habitacion.service';

describe('RestHabitacionService', () => {
  let service: RestHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
