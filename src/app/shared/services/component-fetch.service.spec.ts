import { TestBed, inject } from '@angular/core/testing';

import { ComponentFetchService } from './component-fetch.service';

describe('ComponentFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentFetchService]
    });
  });

  it('should ...', inject([ComponentFetchService], (service: ComponentFetchService) => {
    expect(service).toBeTruthy();
  }));
});
