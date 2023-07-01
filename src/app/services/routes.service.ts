import { Injectable } from "@angular/core";

@Injectable()
export class PathService{
    private _paths = {
        loginPage: "Login",
        signInPage: "sign_in",
        register1: "register_page_1",
        register2: "register_page_2"
    }

    public get paths(){
        return this._paths;
    }
}