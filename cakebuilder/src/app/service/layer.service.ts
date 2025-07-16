import { Injectable } from '@angular/core';
import { layer } from '../model/layer'; // this should match your model file name & case

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  private layers: layer[] = [];
  private nextId = 1;

  constructor() {}


  getLayers(): layer[] {
    return this.layers;
  }

  addLayer(newLayer: Omit<layer, 'id'>): void {
    this.layers.push({ ...newLayer, id: this.nextId++ });
  }

  deleteLayer(id: number): void {
    this.layers = this.layers.filter(layer => layer.id !== id);
  }
}

