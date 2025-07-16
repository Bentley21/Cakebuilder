import { Component } from '@angular/core';
import { CakeLayerComponent } from '../cake-layer/cake-layer';
import { LayerAddComponent } from '../layer-add/layer-add'
import { LayerService } from '../../service/layer.service';
// Update the import path below if your Layer model is in a different location or has a different filename/extension
import { layer } from '../../model/layer'; // Use lowercase 'layer' if your file is named 'layer.ts'

@Component({
  selector: 'app-cake-builder',
  imports: [CakeLayerComponent, LayerAddComponent],
  templateUrl: './cake-builder.html',
  styleUrl: './cake-builder.css'
})
export class CakeBuilder {
get layers() {
  
  return this.layerService.getLayers(); 
  
  }

  constructor(private layerService: LayerService) {}

addLayer(layer : layer) {
    this.layerService.addLayer(layer);
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
}
}
