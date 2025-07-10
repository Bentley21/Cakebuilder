import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeLayer } from './cake-layer';

describe('CakeLayer', () => {
  let component: CakeLayer;
  let fixture: ComponentFixture<CakeLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeLayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
