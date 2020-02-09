import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Value } from "../models/Value";

@Component({
  selector: "app-values",
  templateUrl: "./values.component.html",
  styleUrls: ["./values.component.css"],
  providers: [HttpClient]
})
export class ValuesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  values: Value[] = [];
  ngOnInit() {
    this.getValues().subscribe(response => {
      this.values = response;
    });
  }

  getValues() {
    return this.http.get<Value[]>("http://localhost:56669/api/values");
  }
}
