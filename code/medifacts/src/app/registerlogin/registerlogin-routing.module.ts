import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RegisterLoginPage } from "./registerlogin.component";

const routes: Routes = [
    {
        path: '',
        component: RegisterLoginPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterLoginPageModule {}