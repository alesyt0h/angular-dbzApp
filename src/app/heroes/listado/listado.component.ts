import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América']
  heroeBorrado: string = '';


  borrarHeroe() {
    // this.heroes.shift()  //removes the first element in the array
    // const heroeBorrado: string = this.heroes.pop() //removes the last  element in the array
    //this.heroes.splice(2,1) //removes specified element or elements in the array
    
    // this.heroeBorrado = heroeBorrado || ''; // || '' para evitar el error, si no es string || esta vacio '' 
    this.heroeBorrado = this.heroes.shift() || ''
  }
}
