import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  public heroe: Heroe;

  constructor() {
    this.heroe = {
      nombre: "",
      casa: "MARVEL",
      bio: ""
    };
  }

  ngOnInit() {}

  public guardar() {
    console.log(this.heroe);
    
  }
}
