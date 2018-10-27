import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  public heroe: Heroe;
  public nuevo: boolean = false;
  public id: string;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ) {
    activatedRouted.params.subscribe(params => {
      console.log("Params: ", params);
      this.id = params["id"];
      this.nuevo = this.id == "nuevo";
    });

    // inicializo la variable heroe
    this.heroe = {
      nombre: "",
      casa: "MARVEL",
      bio: ""
    };
  }

  ngOnInit() {}

  public guardar() {
    console.log(this.heroe);

    if (this.nuevo) {
      this.heroesService.nuevoHeroe(this.heroe).subscribe(
        (data: any) => {
          console.log("servicio.guardar(): ", data);
          this.router.navigate(["/heroe", data.name]);
        },
        error => {
          console.error("Error al guardar: ", error);
        }
      );
    } else {
      // this.heroe.key$ = this.id;
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe(
        (data: any) => {
          console.log("servicio.guardar(): ", data);
        },
        error => {
          console.error("Error al guardar: ", error);
        }
      );
    }
  }
}
