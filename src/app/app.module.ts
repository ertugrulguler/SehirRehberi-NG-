import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ValuesComponent } from "./values/values.component";
import { NavComponent } from "./nav/nav.component";
import { CityComponent } from "./city/city.component";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { NgxGalleryModule } from "ngx-gallery";

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
