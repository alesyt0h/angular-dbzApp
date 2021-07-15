import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <!-- <button (click) = " numero = numero + 1 "> + 1 </button>
        <span>{{ numero }}</span>
        <button (click) = " numero = numero - 1 "> - 1 </button> -->

        <!-- <button (click) = "sumar()"> + 1 </button>
        <span>{{ numero }}</span>
        <button (click) = "restar()"> - 1 </button> -->

        <h4>Acumular with integer</h4>
        <button (click) = "acumular(2)"> + 1 </button>
        <span>{{ numero }}</span>
        <button (click) = "acumular(-2)"> - 1 </button>

        <h3>La base es: <strong>{{base}}</strong></h3>
        <h4>Acumular with propiedad de la clase</h4>
        <button (click) = "acumular(base)"> + {{base}}</button>
        <span>{{ numero }}</span>
        <button (click) = "acumular(-base)"> - {{base}}</button>
    `
})

export class contadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    
    // sumar () {
    //   this.numero += 1
    // }
    // restar () {
    //   this.numero -= 1
    // }
    //
    //better approach
    acumular (valor: number) {
      this.numero += valor;
    }
}