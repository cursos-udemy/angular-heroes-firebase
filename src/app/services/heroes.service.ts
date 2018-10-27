import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from "../interfaces/heroe.interface";
// import "rxjs/Rx";

const FIREBASE_URL: string =
  "https://heroesapp-3ff73.firebaseio.com/heroes.json";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(private http: HttpClient) {
    console.log("HeroesService init [OK]");
    console.log(FIREBASE_URL);
  }

  public nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders ({
      "Content-Type": "application/json"
    });

    return this.http.post (FIREBASE_URL, body, { headers: headers });
    // map(r => {
    //   console.log(r.json());
    //   return r.json();
    // });
  }
}
