import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityService } from "src/app/services/city.service";
import { City } from "src/app/models/city";

@Component({
  selector: "app-city-detail",
  templateUrl: "./city-detail.component.html",
  styleUrls: ["./city-detail.component.css"]
})
export class CityDetailComponent implements OnInit {
  city: City;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params.id);
    });
  }

  getCityById(cityId) {
    console.log(cityId);
    this.cityService.getCityById(cityId).subscribe(response => {
      this.city = response;
      console.log("cityDetail: ", this.city);
    });
  }
}
