import {Injectable} from "@angular/core";
import { User } from "../../interfaces/user.interface";
import {BehaviorSubject, } from "rxjs"

@Injectable()
export class DataUserService{
    private _user: User = {
        name: "",
        idCard: "",
        email: "",
        password: "",
        confirmedPassword: ""
    }

    private userObs$: BehaviorSubject<User>;

    constructor(){
        this.userObs$ = new BehaviorSubject<User>(this._user);
    }

    get user(){
        return this.userObs$.asObservable();
    }

    setName(name: string){
        this._user.name = name;
        this.updateDataUser(this._user);
    }
    setIdCard(idCard: string){
        this._user.idCard = idCard;
        this.updateDataUser(this._user);
    }
    setEmail(email: string){
        this._user.email = email;
        this.userObs$.next(this._user);
    }
    setPassword(password: string){
        this._user.password = password;
        this.userObs$.next(this._user);
    }

    setConfirmedPassword(password: string){
        this._user.confirmedPassword = password;
        this.userObs$.next(this._user);
    }

    updateDataUser(user: User){
        this.userObs$.next(user);
    }
}