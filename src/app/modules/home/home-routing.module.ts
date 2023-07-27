import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AuthDeactiveGuard } from "src/app/core/guards/auth-deactive.guard";

const routes: Routes = [
    {path: '', component: HomeComponent, canDeactivate: [AuthDeactiveGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{

}