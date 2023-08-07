import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { UserAuthService } from "src/app/core/services/user-auth.service";
import { environment } from "src/environments/environment";
import { Stops } from "../model/stop.model";

@Injectable()
export class StopService{
    private http = inject(HttpClient);
    private userAuth = inject(UserAuthService);
  
    get() {
      return this.http.get<Stops>(environment.apiStrapiUrl + '/stops', {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.userAuth.localJwt}`,
        }),
      });
    }
}