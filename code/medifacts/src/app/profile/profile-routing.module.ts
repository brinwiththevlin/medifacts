import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProfilePage } from "./profile.component";

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilePageModule {}