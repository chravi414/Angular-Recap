import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Country } from "./country";
import { CountryService } from "./country.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent implements OnInit {
  public countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl(),
  });
  constructor(private countryService: CountryService) {}

  ngOnInit() {}

  addCountry() {
    const formData = this.countryForm.value;
    this.countryService.addCountry(formData).subscribe(
      (data) => {
        console.log("Success", data);
      },
      (err) => {
        throw err;
      }
    );
  }
}
