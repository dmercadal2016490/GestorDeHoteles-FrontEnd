import { TestBed } from '@angular/core/testing';

import { RestServicioService } from './rest-servicio.service';

describe('RestServicioService', () => {
  let service: RestServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
