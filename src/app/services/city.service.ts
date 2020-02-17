import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City } from "../models/city";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CityService {
  apiEndPoint = environment.apiEndPoint;
  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.apiEndPoint + "cities");
  }
}
