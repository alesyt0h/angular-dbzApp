import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  
  constructor(){}

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // En otros lenguajes como simple javascript habria que usar este event.preventDefault() para evitar el evento por defecto, en este caso es reload.
  // En angular normal simplemente importando el FormsModule ya bastaria pero si no, habria que añadir en el <form (ngSubmit)=""> arreglaria este reload. 
  // 
  // agregarTedious( event: any ){
  //   event.preventDefault()
  //   console.log(event)
  // }


  /*

  ===============
  The next block will be cutted and pasted into dbz.service. 
  Es mucho mejor tener la data en el servicio en lugar de tenerla aqui, en el modulo principal, lo cual veo un poco lioso tener que usar tantos inputs y outputs. Cuando en el servicio se actualizaran estos datos, se lo pasaria directamente a todos los hijos del parent
  ===============



  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];
  */


  // Exported to agregar.component
  //
  // nuevo: Personaje = {
  //   nombre: '',
  //   poder: 0
  // }
  
  //
  //  Just use ngModel to change the value
  //
  //  cambiarNombre( event: any ){
  //   console.log(event.target.value);
  // }


  // Exported to agregar.component
  //
  // agregarPersonaje(){
  //   // if (this.nuevo.nombre.trim().length === 0) { return; } //I dislike this
  //   if (!this.nuevo.nombre || !this.nuevo.poder) return;

  //   console.log(this.nuevo)

  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {nombre:'' , poder:0}
  // }

  // Solventaria el error causado por this.personajes al no existir dentro de este componente, devuelve el valor directo desde el servicio
  // 
  // get personajes(): Personaje[]  {
  //   return this.dbzService.personajes;
  // }



  /*
  //esto ira en el dbz.service

  agregarNuevoPersonaje(argumento: Personaje){
    // console.log(argumento)
    // debugger;
    this.personajes.push(argumento)
  }
  */
}
