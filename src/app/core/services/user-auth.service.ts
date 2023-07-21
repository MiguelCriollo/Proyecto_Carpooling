import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserAuthService{
    private isUserAuth$: BehaviorSubject<boolean>;

    constructor(){
        this.isUserAuth$ = new BehaviorSubject(false);
    }

    updateUserAuth(state: boolean){
        this.isUserAuth$.next(state);
    }

    isUserAuth(){
        return this.isUserAuth$.asObservable();
    }
}