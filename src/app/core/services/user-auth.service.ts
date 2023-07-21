import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserAuthModel } from "src/app/modules/login/models/user.model";

@Injectable()
export class UserAuthService{
    private isUserAuth$: BehaviorSubject<boolean>;
    private http = inject(HttpClient);

    constructor(){
        this.isUserAuth$ = new BehaviorSubject(false);
    }

    updateUserAuth(state: boolean){
        this.isUserAuth$.next(state);
    }

    isUserAuth(){
        return this.isUserAuth$.asObservable();
    }

    getToken(email: string, password: string){
        return this.http.post<UserAuthModel>('http://localhost:1337/api/auth/local', {
            identifier: email, password: password
        });
    }
}