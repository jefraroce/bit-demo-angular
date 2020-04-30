import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: [
  ]
})
export class DemoComponent {
  title = '';
  nombre = '';
  edad = 0;
  lista = [];

  agregar() {
    this.lista.push( { nombre: this.nombre, edad: this.edad } )
  }

  saludar() {}
}
