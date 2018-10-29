import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  public heroes: any = [];
  public loading: boolean = true;

  constructor(private heroesService: HeroesService) {
    this.cargarHeroes();
  }

  ngOnInit() {}

  private cargarHeroes() {
    this.loading = true;
    this.heroesService.getHeroes().subscribe(
      data => {
        this.heroes = data;
      },
      error => {
        console.error("Error al cargar heroes", error);
      },
      () => {
        console.log("finalizacion cargar heroes");
        this.loading = false;
      }
    );
  }

  public borrarHeroe(key$: string) {
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
    );
    return false;
  }
}
