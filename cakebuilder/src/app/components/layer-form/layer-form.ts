import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './layer-form.html',
  styleUrls: ['./layer-form.css'] 
})
export class LayerFormComponent {
  height = 1;
  width = 1;
  color = '#ffffff'; 

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  submitForm() {
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
