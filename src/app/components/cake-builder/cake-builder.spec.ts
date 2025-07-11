import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeBuilder } from './cake-builder';

describe('CakeBuilder', () => {
  let component: CakeBuilder;
  let fixture: ComponentFixture<CakeBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
