import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerForm } from './layer-form';

describe('LayerForm', () => {
  let component: LayerForm;
  let fixture: ComponentFixture<LayerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
