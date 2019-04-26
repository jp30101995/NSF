import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyTreeComponent } from './familytree.component';

const routes: Routes = [ {
  path: '',
  component: FamilyTreeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilytreeRoutingModule { }
