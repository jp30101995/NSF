import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignyourqueryComponent } from './designyourquery.component'
const routes: Routes = [
    {
        path: '',
        component: DesignyourqueryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesignyourquerygRoutingModule {}
