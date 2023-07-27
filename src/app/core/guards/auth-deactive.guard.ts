import { CanDeactivateFn } from "@angular/router";
import { IsAuth } from "../models/auth-user.model";

export const AuthDeactiveGuard: CanDeactivateFn<IsAuth> = (component: IsAuth)=>{
    return component.isAlreadyAuth();
}