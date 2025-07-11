import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layer-form',
  imports: [],
  templateUrl: './layer-form.html',
  styleUrl: './layer-form.css'
})
export class LayerFormComponent {
  height = 1;
  width = 1;
  color = '';

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  submitForm(){
    this.save.emit({
      height: this.height,
      width: this.width,
      color: this.color
    });
  }

  cancelForm() {
    this.cancel.emit();
  }


}
