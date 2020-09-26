import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "./country";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private URL = "/api/countries";
  constructor(private http: HttpClient) {}

  addCountry(countryData: Country): Observable<Country> {
    return this.http.post<Country>(this.URL, countryData);
  }
}
