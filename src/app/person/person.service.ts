import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./person";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  public URL = "/api/persons";
  constructor(private http: HttpClient) {}

  addPerson(personData: Person): Observable<Person> {
    return this.http.post<Person>(this.URL, personData);
  }
}
