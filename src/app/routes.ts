import { Routes } from "@angular/router";
import { CityComponent } from "./city/city.component";
import { ValuesComponent } from "./values/values.component";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { CityAddComponent } from "./city/city-add/city-add.component";

export const appRoutes: Routes = [
  { path: "city", component: CityComponent },
  { path: "cityAdd", component: CityAddComponent },
  { path: "cityDetail/:id", component: CityDetailComponent },
  { path: "values", component: ValuesComponent },
  { path: "**", redirectTo: "city", pathMatch: "full" }
];
