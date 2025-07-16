import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerService } from '../../service/layer.service';

@Component({
  selector: 'app-cake-layer',
  standalone: true,
  templateUrl: './cake-layer.html',
  styleUrls: ['./cake-layer.css'],
  imports: [CommonModule]
})
export class CakeLayerComponent {
  constructor(public layerService: LayerService) {}
}
