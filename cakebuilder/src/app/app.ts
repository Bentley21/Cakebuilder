import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CakeBuilder } from "./components/cake-builder/cake-builder";
import { FormsModule } from '@angular/forms';
import { CakeLayerComponent } from './components/cake-layer/cake-layer';
import { LayerAddComponent } from './components/layer-add/layer-add';


@Component({
  selector: 'app-root',
  imports: [CakeBuilder , RouterModule , FormsModule, CakeLayerComponent, LayerAddComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cakebuilder';
}
