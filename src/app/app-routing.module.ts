import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CountryComponent } from "./country/country.component";
import { PersonComponent } from "./person/person.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GlobalError } from "./global-error.component";

const routes: Routes = [
  {
    path: "country",
    component: CountryComponent,
  },
  {
    path: "person",
    component: PersonComponent,
  },
  {
    path: "error",
    component: GlobalError,
  },
  {
    path: "",
    redirectTo: "/country",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
