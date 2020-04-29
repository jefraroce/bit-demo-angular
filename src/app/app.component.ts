import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = '';
  edad = 0;
  lista = [];

  agregar() {
    this.lista.push( { nombre: this.nombre, edad: this.edad } )
  }
}
