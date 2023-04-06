import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RegisterLoginPage } from "./registerlogin.component";
import { RegisterPage } from "./register.component";

const routes: Routes = [
    {
        path: '',
        component: RegisterLoginPage
    },
    {
        path:'register',
        component: RegisterPage
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterLoginPageModule {}