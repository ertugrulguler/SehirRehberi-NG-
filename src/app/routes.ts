import { Routes } from "@angular/router";
import { CityComponent } from "./city/city.component";
import { ValuesComponent } from "./values/values.component";

export const appRoutes: Routes = [
  { path: "city", component: CityComponent },
  { path: "values", component: ValuesComponent },
  { path: "**", redirectTo: "city", pathMatch: "full" }
];
