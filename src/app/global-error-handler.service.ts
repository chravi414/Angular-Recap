import { Injector, ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: any) {
    const router = this.injector.get(Router);
    const url = router.url;
    console.log(url);
    if (error instanceof HttpErrorResponse) {
      console.log("Backend Error", error.message);
    } else {
      console.log("Client side error", error.message);
    }
    router.navigate(["/error"]);
  }
}
