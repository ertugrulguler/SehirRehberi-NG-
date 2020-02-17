import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ValuesComponent } from "./values/values.component";
import { NavComponent } from "./nav/nav.component";
import { CityComponent } from './city/city.component';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
      CityComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
