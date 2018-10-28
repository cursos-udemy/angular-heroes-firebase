import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  public heroes:any = [];
  
  constructor(private heroesService:HeroesService) { 
    this.cargarHeroes();
  }
  
  ngOnInit() {
  }

  private cargarHeroes() {
    this.heroesService.getHeroes().subscribe (data => {
      this.heroes = data;
    });
  }

  public borrarHeroe (key$:string) {
    console.log("Eliminar heroe: ", key$);
    this.heroesService.eliminarHeroe(key$).subscribe(
      (data: any) => {
        if (!data) {
          delete this.heroes[key$];
          //this.cargarHeroes();
        }
      },
      error => {
        console.error("Error al borrarHeroe: ", error);
      }
    );;
    return false;
  }
}
