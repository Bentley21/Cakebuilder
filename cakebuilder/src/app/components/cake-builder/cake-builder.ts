import { Component } from '@angular/core';
import { LayerService } from '../../service/layer.service';
// Update the import path below if your Layer model is in a different location or has a different filename/extension
import { Layer } from '../../models/layer'; // Use lowercase 'layer' if your file is named 'layer.ts'

@Component({
  selector: 'app-cake-builder',
  imports: [],
  templateUrl: './cake-builder.html',
  styleUrl: './cake-builder.css'
})
export class CakeBuilder {
get layers() {
    return this.layerService.getLayer();
  }

  constructor(private layerService: LayerService) {}

addLayer(layer : Layer) {
    this.layerService.addLayer(layer);
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
}
