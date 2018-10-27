import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  public heroe: Heroe;

  constructor(private heroesService: HeroesService, private router: Router) {
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

    this.heroesService.nuevoHeroe(this.heroe).subscribe(
      (data: any) => {
        console.log("servicio.guardar(): ", data);
        this.router.navigate(["/heroe", data.name]);
      },
      error => {
        console.error("Error al guardar: ", error);
      }
    );
  }
}
