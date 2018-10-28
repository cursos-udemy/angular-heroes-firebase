import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";
import { AppRoutingModule } from "./app.routes";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroesService } from "./services/heroes.service";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NavbarComponent,
    KeysPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
