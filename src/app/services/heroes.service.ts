import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from "../interfaces/heroe.interface";
// import "rxjs/Rx";

const FIREBASE_URL: string = "https://heroesapp-3ff73.firebaseio.com";
const FIREBASE_DATABASE: string = FIREBASE_URL + "/heroes";
const FIREBASE_DATABASE_JSON: string = FIREBASE_URL + "/heroes.json";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(private http: HttpClient) {
    console.log("HeroesService init [OK]");
  }

  public nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(FIREBASE_DATABASE_JSON, body, { headers: headers });
    // map(r => {
    //   console.log(r.json());
    //   return r.json();
    // });
  }

  public actualizarHeroe(heroe: Heroe, key$:string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let url = `${FIREBASE_DATABASE}/${key$}.json`;

    return this.http.put(url, body, { headers: headers });
    // map(r => {
    //   console.log(r.json());
    //   return r.json();
    // });
  }
}
