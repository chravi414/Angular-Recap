import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryComponent } from "./country/country.component";
import { PersonComponent } from "./person/person.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GlobalError } from "./global-error.component";
import { GlobalErrorHandlerService } from "./global-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PersonComponent,
    PageNotFoundComponent,
    GlobalError,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
