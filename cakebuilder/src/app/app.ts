import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CakeBuilder } from "./components/cake-builder/cake-builder";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CakeBuilder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cakebuilder';
}
