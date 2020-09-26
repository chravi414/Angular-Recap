import { Component, OnInit } from "@angular/core";
import { PersonService } from "./person.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"],
})
export class PersonComponent implements OnInit {
  public personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
    mobile: new FormControl(),
  });
  constructor(private personService: PersonService) {}

  ngOnInit() {}

  addPerson() {
    const personData = this.personForm.value;
    this.personService.addPerson(personData).subscribe(
      (data) => {
        console.log("Success", data);
      },
      (err) => {
        throw err;
      }
    );
  }
}
