import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerFormComponent } from '../layer-form/layer-form';
import { LayerService } from '../../service/layer.service';

@Component({
  selector: 'app-layer-add',
  standalone: true,
  templateUrl: './layer-add.html',
  styleUrls: ['./layer-add.css'],
  imports: [CommonModule, FormsModule, LayerFormComponent]
})
export class LayerAddComponent {
  showForm = false;

  constructor(private layerService: LayerService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  handleSave(layer: { width: number; height: number; color: string }) {
    this.layerService.addLayer(layer);
    this.toggleForm(); // hide form after saving
  }
}



