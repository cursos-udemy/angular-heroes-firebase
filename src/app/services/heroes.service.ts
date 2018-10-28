import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from "../interfaces/heroe.interface";
// import "rxjs/Rx";

const FIREBASE_URL: string = "https://heroesapp-3ff73.firebaseio.com";
const FIREBASE_DATABASE: string = FIREBASE_URL + "/heroes";
const FIREBASE_HEADERS = new HttpHeaders({
  "Content-Type": "application/json"
});

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(private http: HttpClient) {
    console.log("HeroesService init [OK]");
  }

  public getHeroe(key$: string) {
    let url = `${FIREBASE_DATABASE}/${key$}.json`;
    return this.http.get(url, { headers: FIREBASE_HEADERS });
  }

  public getHeroes() {
    let url = `${FIREBASE_DATABASE}.json`;
    return this.http.get(url, { headers: FIREBASE_HEADERS });
  }

  public nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let url = `${FIREBASE_DATABASE}.json`;
    return this.http.post(url, body, { headers: FIREBASE_HEADERS });
  }

  public actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let url = `${FIREBASE_DATABASE}/${key$}.json`;
    return this.http.put(url, body, { headers: FIREBASE_HEADERS });
    // map(r => {
    //   console.log(r.json());
    //   return r.json();
    // });
  }

  public eliminarHeroe(key$: string) {
    let url = `${FIREBASE_DATABASE}/${key$}.json`;
    return this.http.delete(url, { headers: FIREBASE_HEADERS });
  }

}
