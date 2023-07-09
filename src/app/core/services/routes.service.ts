import { Injectable } from "@angular/core";

@Injectable()
export class PathService{
    private _paths = {
        loginPage: "Login",
        signInPage: "Sign_in",
        register1: "Register/1",
        register2: "Register/2",
        user: "User",
        homePage: "User/Home"
    }

    public get paths(){
        return this._paths;
    }
}