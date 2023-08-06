import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DriverFormComponent } from "./pages/driver-form/driver-form.component";

const routes: Routes = [
    {path: '', component: DriverFormComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriverFormRoutingModule{}