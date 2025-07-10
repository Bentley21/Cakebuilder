import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBuilder } from './layer-builder';

describe('LayerBuilder', () => {
  let component: LayerBuilder;
  let fixture: ComponentFixture<LayerBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
