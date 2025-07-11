import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerAdd } from './layer-add';

describe('LayerAdd', () => {
  let component: LayerAdd;
  let fixture: ComponentFixture<LayerAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
