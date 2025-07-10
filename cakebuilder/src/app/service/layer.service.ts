import {Injectable} from '@angular/core';
import {layer} from '../model/layer';

Injectable({
    providedIn: 'root'
})
export class LayerService {

    layer: LayerService[] = []


    constructor() { }

    private layers: layer [] = [];
    private nextId = 1;
    
    getLayer(): layer[] {
        return this.layers;
    }

    addLayer(layer: Omit<layer, 'id'>): void {
        this.layers.push({ ...layer, id: this.nextId++ });
      }
    
      deleteLayer(id: number): void {
        this.layers = this.layers.filter(layer => layer.id !== id);
    
   }
}
